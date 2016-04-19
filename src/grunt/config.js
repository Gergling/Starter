var grunt = require('grunt');

var expand = function (blobs) {
    return grunt.file.expand(blobs.map(function (blob) {
        return 'src/client/**/' + blob;
    }));
};

module.exports = {
    paths: {
        css: {
            vendor: [
                'node_modules/bootstrap/dist/css/bootstrap.css'
            ],
            src: expand([
                '*.css'
            ]),
        },
        js: {
            vendor: [
                'jquery/dist/jquery.js',
                'angular/angular.js',
                'angular-ui-router/release/angular-ui-router.js',
                'bootstrap/dist/js/bootstrap.js'
            ].map(function (path) {
                return 'node_modules/' + path;
            }),
            src: expand([
                'module',
                '*'
            ].map(function (blob) {
                return blob + '.js';
            }))
        }
    }
};
