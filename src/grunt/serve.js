module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-serve');

	return {
		options: {
			port: 9000,
			'index.html': {
				tasks: ['sass', 'template'],
				//output: 'index.html'
			}
		}
	};
};
