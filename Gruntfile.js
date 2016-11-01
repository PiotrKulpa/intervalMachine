// Generated on 2016-10-14 using generator-angular 0.15.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'
//var modRewrite = require('connect-modrewrite');


module.exports = function (grunt) {

	

	grunt.initConfig({
		//define tasks here
		connect: {
			server: {
				options: {
					port: 9000,
					base: '',
					//should be false when reloading
					//keepalive: true,
					open: {
					target: 'http://localhost:9000'
					}
				}
			}
		},
		
		watch: {
			scripts: {
				files: ['*.html', 'js/*.js'],
				//tasks: ['compass'],
				options: {
					livereload: 1337,
				}
			},
			css: {
				files: '**/*.scss',
				tasks: ['compass'],
				options: {
				livereload: 1337,
				}
			}
		},
		//task for task watch css - compass watch
		compass: {                  // Task
			dist: {                   // Target
				options: {              // Target options
					sassDir: 'sass',
					cssDir: 'stylesheets',
					environment: 'development'
				}
			}
		}
		
	});
	
	grunt.event.on('watch', function(action, filepath, target) {
  grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
});

	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	//register all tasks in one comend
	grunt.registerTask('server',['connect', 'watch']);
	
};