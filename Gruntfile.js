module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        reporter: require('jshint-stylish')
      },
      build: ['Gruntfile.js', 'src/**/*.js']
    },

    uglify: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
          'dist/js/<%= pkg.name %>.min.js': ['src/<%= pkg.name %>.js']
        }
      }
    },

    copy: {
      main: {
        files: [
          // includes files within path
          {
            src: 'src/<%= pkg.name %>.js',
            dest: 'dist/js/<%= pkg.name %>.js'
          }
        ],
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('jshint-stylish');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks("grunt-contrib-copy");

  grunt.registerTask('default', ['jshint', 'uglify', 'copy']);
};