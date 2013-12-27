var path = require('path');

module.exports = function (grunt) {

    /*
     * we want to load the module dependencies from load-common-grunt-tasks so traverse the module tree to find them
     */
    var pathToLoadCommon = './node_modules/load-common-grunt-tasks';
    grunt.loadTasks(pathToLoadCommon + '/node_modules/grunt-contrib-jshint/tasks');
    grunt.loadTasks(pathToLoadCommon + '/node_modules/grunt-mocha-test/tasks');
    grunt.loadTasks(pathToLoadCommon + '/node_modules/grunt-mocha-cov/tasks');

    var testCoverageOutputFile = 'test-coverage-output.html';
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
        },
        mochaTest: {
            unit: {
                options: {
                    reporter: 'spec'
                },
                src: ['test/*.js']
            },
            functional: {
                options: {
                    reporter: 'spec'
                },
                src: ['test-functional/*.js']
            }
        },
        mochacov: {
            options: {
                reporter: 'html-cov',
                require: ['should'],
                output: testCoverageOutputFile
            },
            unit: {
                src: ['test/*.js']
            },
            functional: {
                src: ['test-functional/*.js']
            }
        }
    });

    grunt.registerTask('mochacov-wrapper', 'Wrapper for mochacov which generates a js test coverage report to ' + testCoverageOutputFile, function(type) {
        var testType = (!type) ? '' : ':' + type;
        // make blanket.js available to mocha
        grunt.file.copy(pathToLoadCommon + "/resources/_instrument.js", pathToLoadCommon + "/node_modules/grunt-mocha-cov/lib/instrument.js");
        grunt.task.run('mochacov' + testType);
        grunt.log.writeln("View coverage report at " + path.resolve('./' + testCoverageOutputFile));
    });

    grunt.registerTask('test', 'Run tests, code coverage and jshint. Specify unit or functional only by using the ":<type>" flag', function(type) {
        var testType = (!type) ? '' : ':' + type;
        grunt.task.run('mochaTest' + testType);
        grunt.task.run('mochacov-wrapper' + testType);
        grunt.task.run('jshint');
    });

    grunt.registerTask('default', ['test']);
};