var root = require('path').resolve('./')

var buildDir = 'dist'
var config = {
    paths: {
        buildDir: buildDir,
        build: buildDir + '/**',
        img: ['img/**/*'],
        markdown: ['_posts/*.md'],
        html: {
            src: ['**/*.html'],
            build: [buildDir + '/**/*.html'],
            dest: './'
        },
        sass: {
            main: 'sass/main.sass',
            src: 'sass/*.sass',
            dest: 'css/'
        },
        css: {
            main: 'styles.css',
            src: [
                'css/main.css',
                'bower_components/bootstrap/dist/css/bootstrap.min.css',
                'bower_components/font-awesome/css/font-awesome.css'
            ],
            dest: buildDir + '/css/'
        },
        js: {
            main: 'src/index.js',
            src: 'src/**/*.js',
            dest: buildDir + '/js/'
        }
    }
}
config.paths.watch = [
    '_config.yml',
    '_posts/*.md',
    config.paths.img,
    config.paths.markdown,
    config.paths.html.src,
    config.paths.sass.src,
    config.paths.js.src,

    'orbiter/**/*'
]

var argv = require('yargs').argv
var browserSync = require('browser-sync')
var clean = require('gulp-clean');
var concat = require('gulp-concat')
var gulp = require('gulp')
var minifyCSS = require('gulp-minify-css')
var minifyHTML = require('gulp-minify-html')
var path = require('path')
var prefix = require('gulp-autoprefixer')
var task = require('gulp-task')
var rename = require('gulp-rename')
var run = require('gulp-run')
var runSequence = require('run-sequence')
var sass = require('gulp-sass')
var uglify = require('gulp-uglifyjs')
var watch = require('gulp-watch')
var webpack = require('gulp-webpack')

/* This alerts us audibly when a Gulp task errors out and Gulp stops, otherwise we may not notice and continue editing
files and expecting to see changes. */
function onError(err) {
    console.log('err: ' + err)
}

gulp.task('reload', function () {
    browserSync.reload()
})

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: './'
        },
        browser: 'Google\ Chrome'
    })
})

gulp.task('clean', function () {
    return gulp.src(config.paths.buildDir + '/*', {read: false})
        .pipe(clean());
});

gulp.task('html', function () {
    // Overwrite original files
    return gulp.src(config.paths.html.build, {
        base: './'
    })
        .pipe(minifyHTML())
        .pipe(gulp.dest(config.paths.html.dest))
})

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function () {
    return gulp.src(config.paths.sass.main)
        .pipe(sass({
            includePaths: [config.paths.sass.src],
            onError: onError
        }))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
        .pipe(gulp.dest(config.paths.sass.dest))
})

gulp.task('css-concat', function () {
    return gulp.src(config.paths.css.src)
        .pipe(concat(config.paths.css.main))
        .pipe(gulp.dest(config.paths.css.dest))
})

gulp.task('css-minify', function () {
    return gulp.src(config.paths.css.dest + '/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest(config.paths.css.dest))
})

gulp.task('css-copy', function (done) {
    return gulp.src(config.paths.css.dest + config.paths.css.main)
        .pipe(gulp.dest('/'))
})

gulp.task('css-dev', function (done) {
    runSequence('css-concat', done)
})

gulp.task('css', function (done) {
    runSequence('css-concat', 'css-minify', 'css-copy', done)
})

gulp.task('fonts', function (done) {
    return gulp.src(config.paths.fonts.src)
        .pipe(gulp.dest(config.paths.fonts.dest))
})

gulp.task('js-minify', function () {
    return gulp.src(config.paths.js.dest + '/*.js')
        .pipe(uglify())
        .pipe(gulp.dest(config.paths.js.dest))
})

gulp.task('webpack', function() {
    return gulp.src(config.paths.js.main)
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest(buildDir));
});

gulp.task('js-dev', function (done) {
    runSequence('webpack', done)
})

gulp.task('js', function (done) {
    runSequence('webpack', 'js-minify', done)
})

gulp.task('build', function (done) {
    runSequence('clean', 'html', 'sass', ['css', 'js'], 'cv-to-pdf', 'reload', done)
})

gulp.task('dev-build', function (done) {
    runSequence('clean', 'sass', ['css-dev', 'js-dev'], 'reload', done)
})

gulp.task('dev-watch', function () {
    gulp.watch(config.paths.watch, ['dev-build'])
})

gulp.task('default', function (done) {
    runSequence('dev-build', 'dev-watch', 'browser-sync', done)
})