// Todo: E2E Testing
// Todo: Linting
// Todo: Unit Testing - install angular mocks
// Todo: Use a node server instead of the http-server

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

    // Watch:
    // - New files should run template
    // - New scss files or scss changes should run sass
    // - Changes to spec files should run automated tests
    grunt.registerTask('build', [
        'sass',
        'template',
        // Test the code - failures break the build
        // Lint the code - failures break the build
    ]);
};
