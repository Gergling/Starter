module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-connect');

    return {
        server: {
            options: {
                port: 9000,
                keepalive: true,
                open: true,
                middleware: function(connect, options) {
                    return [
                        // Load the middleware provided by the livereload plugin
                        // that will take care of inserting the snippet
                        require('grunt-contrib-livereload/lib/utils').livereloadSnippet,

                        // Serve the project folder
                        connect.static(options.base)
                    ];
                }
            }
        }
    };
};
