module.exports = function(grunt) {
  // Combine all files in src/
  grunt.initConfig({
    uglify: {
      all_src : {
        options : {
          sourceMap : true,
          sourceMapName : 'sourceMap.map'
        },
        src : ['src/**/*.js', 'main.js'],
        dest : 'orbiter.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
};
