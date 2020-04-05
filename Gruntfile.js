module.exports = function(grunt) {

  
// Project configuration.

grunt.initConfig({

  // Compile SASS to CSS
  sass: {
    compilesass: {
      files: {
        'assets/css/main.css' : 'assets/scss/main.scss'
      }
    }
  },

  // Minify CSS
  cssmin: {
    target: {
      files: {
        'assets/css/main.min.css': 'assets/css/main.css'
      }
    }
  },

  // Minify JS
  uglify: {
    minifyjs: {
      files: {
        'assets/js/main.min.js': 'assets/js/main.js'
      }
    }
  },

  // Watching changes for JS, CSS and HTML files
  watch: {
    watchjs: {
      files: ['assets/js/*.js'],
      tasks: ['uglify'],
    },
    watchcss: {
      files: ['assets/css/*.css', 'assets/scss/**/*.scss'],
      tasks: ['sass', 'cssmin'],
    },
  }
});


  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass', 'cssmin', 'uglify', 'watch']); 

};