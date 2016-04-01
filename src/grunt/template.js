module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-template');
    
    var expand = function (blobs) {
        return grunt.file.expand(blobs.map(function (blob) {
            return 'src/client/**/' + blob;
        }));
    };
    
    var paths = {
        css: expand([
            '*.css'
        ]),
        js: {
            vendor: [
                'node_modules/angular/angular.js'
            ],
            src: expand([
                'module',
                '*'
            ].map(function (blob) {
                return blob + '.js';
            }))
        }
    };

    return {
        'process-html-template': {
            options: {
                data: {
                    paths: paths
                }
            },
            files: {
                'index.html': ['src/template/index.html.tpl']
            }
        }
    };
};
