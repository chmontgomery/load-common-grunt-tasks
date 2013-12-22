## load-common-grunt-tasks [![Build Status](https://secure.travis-ci.org/chmontgomery/load-common-grunt-tasks.png?branch=master)](http://travis-ci.org/chmontgomery/load-common-grunt-tasks) [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

Common grunt tasks so you don't need to redefine the same tasks for every module

## Install

Install with [npm](https://npmjs.org/package/load-common-grunt-tasks): `npm install --save-dev load-common-grunt-tasks`

## Usage
update your `Gruntfile.js` with the following:

```js
module.exports = function(grunt) {
    require('load-common-grunt-tasks')(grunt);
};
```

To override default tasks simply redine them after calling `require('load-common-grunt-tasks')(grunt);`