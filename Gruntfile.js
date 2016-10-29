// Generated on 2016-10-14 using generator-angular 0.15.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'
//var modRewrite = require('connect-modrewrite');


module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-serve');
  grunt.loadNpmTasks('grunt-contrib-connect');

grunt.initConfig({
  
  connect: {
    server: {
      options: {
        port: 9000,
        base: '',
        keepalive: true,
        open: {
          target: 'http://localhost:9000'
        }
      }
    }
  }
});


};