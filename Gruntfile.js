// Todo: Run everything from npm scripts
// Todo: Split up this file
// Todo: Use sublime as IDE

module.exports = function (grunt) {
    'use strict';

    //require('load-grunt-tasks')(grunt);

    // grunt.initConfig({
    //     sass: require('./src/grunt/sass')(grunt),
    //     template: require('./src/grunt/template')(grunt),
    //     jasmine: require('./src/grunt/jasmine')(grunt)
    //     // coverage
    //     // jslint
    // });
    [
        'connect',
        'jasmine',
        'sass',
        //'serve',
        'template'
    ].forEach(function (taskName) {
        grunt.config.set(taskName, require('./src/grunt/' + taskName)(grunt));
    });

    grunt.registerTask('default', [ 'build' ]);

    grunt.registerTask('build', [
        'template', // Build the template
        // Test the code - failures break the build
        // Lint the code - failures break the build
    ]);
};
