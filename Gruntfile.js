module.exports = function (grunt) {
   grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['load-common-grunt-tasks.js'],
      options: {
        // options here to override JSHint defaults
        globals: {}
      }
    }
  });
 
  grunt.loadNpmTasks('grunt-contrib-jshint');
 
  grunt.registerTask('test', ['jshint']);
 
  grunt.registerTask('default', ['test']);
 
};
