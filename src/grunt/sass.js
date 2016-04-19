module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-sass');
    
    return {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                'build/scss.css': 'src/client/**/*.scss'
            }
        }
    }
};
