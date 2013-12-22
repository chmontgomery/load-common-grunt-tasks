# load-common-grunt-tasks [![Build Status](https://secure.travis-ci.org/chmontgomery/load-common-grunt-tasks.png?branch=master)](http://travis-ci.org/chmontgomery/load-common-grunt-tasks) [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

Load common grunt tasks and configs so you don't need to redefine them for every module

## Install

Install with [npm](https://npmjs.org/package/load-common-grunt-tasks): `npm install --save-dev load-common-grunt-tasks`

## Example Config
basic `Gruntfile.js`

```js
module.exports = function(grunt) {
    require('load-common-grunt-tasks')(grunt);
};
```

To override default tasks simply redefine them after calling `require('load-common-grunt-tasks')(grunt);`, e.g.

```js
module.exports = function(grunt) {

    require('load-common-grunt-tasks')(grunt);

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.util._.extend(grunt.config.data, {
        watch: {
            js: {
                files: ['lib/**/*.js'],
                tasks: ['build']
            }
        }
    });

    grunt.registerTask('build', 'custom build task', function() {
        grunt.log.write('Logging some stuff...').ok();
    });

    grunt.registerTask('default', [ 'build', 'jshint']);
};
```