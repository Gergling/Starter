// Todo: Run everything from npm scripts
// Todo: Split up this file
// Todo: Use sublime as IDE

module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        template: require('./src/grunt/template')(grunt)
        // jasmine
        // coverage
        // jslint
    });

    grunt.registerTask('default', [ 'build' ]);

    grunt.registerTask('build', [
        'template', // Build the template
        // Test the code - failures break the build
        // Lint the code - failures break the build
    ]);
};
