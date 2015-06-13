var gulp        = require('gulp');
var shell       = require('shelljs/global')

gulp.task('link', function() {
  var pkgJson = require(process.env.GULPFILE_HOME + '/package.json')

  var deps = pkgJson.devDependencies
  for (dep in deps) {
    exec('sudo npm link ' + dep + '@' + deps[dep])
  }
})
