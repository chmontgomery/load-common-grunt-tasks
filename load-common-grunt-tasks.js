module.exports = function (grunt) {

    /*
     * we want to load the module dependencies from load-common-grunt-tasks so traverse the module tree to find them
     */
    grunt.loadTasks('./node_modules/load-common-grunt-tasks/node_modules/grunt-contrib-jshint/tasks');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        env: process.env,
        jshint: {
            // define the files to lint
            files: ['lib/**/*.js'],
            // configure JSHint (documented at http://www.jshint.com/docs/)
            options: {
                // more options here if you want to override JSHint defaults
                globals: {}
            }
        }
    });

    grunt.registerTask('default', ['jshint']);
};
