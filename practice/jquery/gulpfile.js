var gulp        = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload
var watch       = require('gulp-watch');
var haml        = require('gulp-ruby-haml');
var changed     = require('gulp-changed');
var cache     = require('gulp-cached');

var messages = {
  haml: '<span style="color: grey">Running:</span> $ haml'
};

gulp.task('reload', function () {
  console.log("RELOAD")
  browserSync.reload()
});


gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: '.'
    },
    browser: "safari"
  });
});

// gulp.task('haml', function () {
//   browserSync.notify(messages.haml);
//
//   var locations = ['.']
//
//   locations.forEach(function(location) {
//     console.log("Converting HAML to HTML in: " + location)
//     gulp.src([location + '/*.haml'])
//     .pipe(haml())
//     .pipe(gulp.dest(location));
//   })
//
//   setTimeout(function(){
//     browserSync.reload()
//   }, 750)
// });


// Watch for changes in Haml files
// gulp.task('haml-watch', function() {
//   gulp.src('./*.haml').
//        pipe(cache('robin')).
//        pipe(watch('./*.haml')).
//        pipe(changed('./*.haml')).
//        pipe(haml()).
//        pipe(gulp.dest('.'))
// });

gulp.task('haml-build', function() {
  gulp.src('./*.haml').
       pipe(haml()).
       pipe(gulp.dest('.'))
});

// gulp.task('rebuild', function() {
//   return gulp.src('./*.haml').
//        pipe(cache('robin')).
//        pipe(changed('./*.haml')).
//        pipe(haml()).
//        pipe(gulp.dest('.'))
// });

gulp.task('watch', function () {
  gulp.src('./*.haml').
       pipe(cache('robin')).
       pipe(watch('./*.haml', ['haml-build', 'reload']))
  gulp.watch(['*.js'], ['reload']);
});

gulp.task('default', ['browser-sync', 'watch']);
