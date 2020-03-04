module.exports = function (grunt) {
    grunt.initConfig({
      sprite: {
        all: {
          src: 'icons/*.png',
          dest: 'dist/spritesheet.png',
          destCss: 'dist/sprites.css'
        }
      }
    });
  
    grunt.loadNpmTasks('grunt-spritesmith');
  
    grunt.registerTask('default', ['sprite']);
  };