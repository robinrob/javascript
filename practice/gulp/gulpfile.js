var gulp = require('gulp')
var concat = require('gulp-concat')
var myth = require('gulp-myth')
var sass = require('gulp-sass')
var uglify = require('gulp-uglify')
var jshint = require('gulp-jshint')
var imagemin = require('gulp-imagemin')
var runsequence = require('run-sequence')
var connect = require('connect')
var serve = require('serve-static')
var browsersync = require('browser-sync')
var reload      = browsersync.reload
var browserify = require('browserify')
var source = require('vinyl-source-stream')
var plumber = require('gulp-plumber')
// Cannot get to work cos system beep doesn't work on os x!
// var beeper = require('beeper')
// Use a shell command instead
require('shelljs/global')
var validator = require('gulp-css-validator')
var del = require('del')
var sourcemaps = require('gulp-sourcemaps')
var haml = require('gulp-ruby-haml')
var changed = require('gulp-changed')
var cache = require('gulp-cached')
var argv = require('yargs').argv

var config = require('./config.json')


function onError(err) {
  console.log(err)
  exec('say what the fuck')
}


// If you need to process a particular file before the others,
// you can pass an array of globs into a src() function like
// below. Gulp is smart enough to not process the same file twice.
// var cssFiles = ['app/css/main.css', 'app/css/*.css']

function processCSS(cfg) {
  return gulp.src(cfg.css)
  .pipe(plumber({
    errorHandler: onError
  }))
  .pipe(concat('all.css'))
  .pipe(myth())  
  .pipe(gulp.dest(cfg.dest))
}

gulp.task('styles', function() {
  processCSS(config.desktop)
  processCSS(config.mobile)
})

gulp.task('sass', function() {
  // concat is not needed here as gulp-sass finds any sass @import
  // statements and pulls the files together
  return gulp.src('app/sass/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('dist'))
})

gulp.task('scripts', ['clean'], function() {
  return gulp.src(config.desktop.js)
  .pipe(sourcemaps.init())
  .pipe(plumber({
    errorHandler: onError
  }))
  .pipe(jshint())
  .pipe(jshint.reporter('default'))
  .pipe(concat('all.js'))
  .pipe(uglify())
  .pipe(sourcemaps.write('maps'))
  .pipe(gulp.dest('dist'))
})

gulp.task('images', function() {
  return gulp.src('app/img/*')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/img'))
})


gulp.task('watch', function() {
  gulp.watch('app/css/*.css', function(){runsequence('styles',reload)})
  gulp.watch('app/js/*.js', function(){runsequence('scripts', reload)})
  gulp.watch('app/images/*', function(){runsequence('images', reload)})
})

var MAX = 1
gulp.task('one', function() {
  for (var i = 0; i < MAX; ++i) {
    console.log("ONE")
  }
})

gulp.task('two', function() {
  for (var i = 0; i < MAX; ++i) {
    console.log("TWO")
  }
})

gulp.task('stream', function() {
  var stream = gulp.src(['app/css/main.css'])
  .pipe(gulp.dest('main_is_here.css'))
  return stream
})

gulp.task('printStream', function() {
  var stream = gulp.task('stream')
  console.log(stream)
})


// Dependencies are executed in parallel
gulp.task('three', ['one', 'two'])

gulp.task('parallel', function() {
  // Task provided as an array are executed in paralell
  runsequence(['one', 'two'])  
})

gulp.task('series', function() {
  // Task provided as separate args are excuted in series
  runsequence('one', 'two')
})

gulp.task('default', ['styles', 'scripts', 'images', 'browser-sync', 'watch'])

gulp.task('server', function() {
  return connect().use(serve(__dirname))
  .listen(8080)
  .on('listening', function() {
    console.log('Server Running: View at http://localhost:8080')
  })
})

gulp.task('browser-sync', function(cb) {
  return browsersync({
    server: {
      baseDir:'./'
    }
  }, cb)
})

// // First, we pass our main JavaScript application that requires our modules
// to browserify().
//
// We then run Browserify's built-in .bundle() method, which will bundle our
// source file and its dependencies into a single file.
//
// The file then gets passed to our first .pipe() method, which uses
// vinyl-source-stream to convert the node.js stream into a vinyl stream, and
// then we provide the bundle with the name bundle.js.
//
// Once our file has been bundled, processed, and named, we finally pass it to
// our final pipe, which uses the .dest() method to output the file.

gulp.task('browserify', function() {
  return browserify('./app/js/app.js')
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('dist'))
})

// Clean all files under dist/ except site.css
gulp.task('clean', function() {
  del(['dist/*', '!dist/site.css'])
})

gulp.task('args', function() {
  // Use like: gulp args --arg value
  console.log("arg: " + argv.arg)
})
