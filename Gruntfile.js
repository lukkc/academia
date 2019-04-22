module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
     //minificar e concatenar javascript
      my_target: {
        files: {
          //'site(walison)/js/main.min.js': ['site(walison)/js/*.js'],
        }
      }
    },
    // jade: {
    //   compile: {
    //     options: {
    //       data: {
    //         debug: false
    //       }
    //     },
    //     files: {
    //       "path/to/dest.html": ["path/to/templates/*.jade", "another/path/tmpl.jade"]
    //     }
    //   }
    // }

  //minificar e concatenar css
  cssmin: {
  options: {
    mergeIntoShorthands: false,
    roundingPrecision: -1
  },
  target: {
    files: {
      'site(walison)/css/main.min.css': ['site(walison)/css/cores.css', 'site(walison)/css/navbar.css', 'site(walison)/css/sections/*.css', 'site(walison)/css/base.css', 'site(walison)/css/estados.css']
    }
  }
},

htmlmin: { //minificar html                                    // Task
    dist: {                                      // Target
      options: {                                 // Target options
        removeComments: true,
        collapseWhitespace: true
      },
      files: {                                   // Dictionary of files
        'site(walison)/html/index.min.html': 'site(walison)/html/index.html',
        // 'dist/contact.html': 'src/contact.html'
      }
    },
    dev: {                                       // Another target
      files: {
        // 'site(walison)/html/index.min.html': 'site(walison)/html/index.html',
        // 'dist/contact.html': 'src/contact.html'
      }
    }
  },
//
//   zip: { //zippar arquivos
//       // 'location/to/zip/files.zip': ['file/to/zip.js', 'another/file.css']
//     }
     import_js: {
         files: {
           expand: true,
           cwd: 'js/',
           src: ['**/protocolo-queda.js'],
           dest: 'js/importQueda',
           ext: '.js'
         },
       },
       clean: {
     folder: ['js/importEscore'],
     // folder_v2: ['path/to/dir/**'],
     // contents: ['path/to/dir/*'],
     // subfolders: ['path/to/dir/*/'],
     // css: ['path/to/dir/*.css'],
     // all_css: ['path/to/dir/**/*.css']
     }


  });


  grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  // grunt.loadNpmTasks('grunt-zip');
  grunt.loadNpmTasks('grunt-import-js');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['cssmin']);
  grunt.registerTask('importjs', ['clean','import_js','uglify']);
  grunt.registerTask('minjs', ['uglify']);
  grunt.registerTask('minhtml', ['htmlmin']);

};
