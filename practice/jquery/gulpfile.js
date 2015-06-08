var gulp        = require('gulp');
var browsersync = require('browser-sync');
var reload      = browsersync.reload
var watch       = require('gulp-watch');
var haml        = require('gulp-ruby-haml');
var changed     = require('gulp-changed');
var cache     = require('gulp-cached');
var runsequence = require('run-sequence')
var gcallback = require('gulp-callback')
var plumber = require('gulp-plumber')
require('shelljs/global')

var messages = {
  hamlBuild: '<span style="color: grey">Running:</span> $ haml'
};

function onError(err) {
  console.log(err)
  exec('say what the fuck')
}

gulp.task('reload', function () {
  browsersync.reload()
});


gulp.task('browser-sync', function() {
  browsersync({
    server: {
      baseDir: '.'
    },
    browser: "safari"
  });
});

// Watch for changes in Haml files
gulp.task('haml-watch', function() {
  var dest = '.'
  gulp.src('./*.haml').
    pipe(plumber({
      onError: onError
    })).
    pipe(watch('./*.haml')).
    pipe(changed(dest, {extension: '.html'})).
    pipe(haml()).
    pipe(gulp.dest(dest)).
    pipe(gcallback(reload))
})

// gulp.task('reload', function() {
//   reload()
// })

gulp.task('watch', function () {
  gulp.watch('*.haml', function(){runsequence('haml-build')})
  gulp.watch('*.html').on('change', reload);
});

gulp.task('default', ['browser-sync', 'haml-watch']);
