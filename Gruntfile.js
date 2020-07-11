module.exports = function (grunt) {

    grunt.initConfig({
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "assets/css/style.min.css": "assets/css/**/*.less"
                }
            }
        },
        
        // concat: {
        //     script: {
        //         src: ['path/js/**/*.js','!**/*jquery-3.5.1.min.js'],
        //         dest: 'assets/js/combined-base.min.js'
        //     }
        // },

        autoprefixer:{
            dist:{
                files:{
                    'assets/css/style.min.css':'assets/css/style.min.css'
                }
            }
        },

        processhtml: {
            build: {
                files: {
                    'index.html' : ['index.html']
                }
            }
        },

        watch: {
            styles: {
                files: ['assets/css/**/*.less'],
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        },
        
        browserSync: {
            resource: {
                    files: {
                    src: ['assets/**/*.css', 'assets/**/*.js', '*.html']
                },
                    options: {
                    watchTask: true,
                    livereload: true,
                    server: './'
                }
            }
        },

        // clean: {
        //     build: {
        //       src: ['resource/css/*.css', 'resource/js/*.js']
        //     }
        // },

        copy: {
            main: {
                expand: true,
                src: 'assets/**',
                dest: 'backup',
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-less'); //less
    grunt.loadNpmTasks('grunt-autoprefixer'); //autoprefixer
    // grunt.loadNpmTasks('grunt-contrib-concat'); //concat
    grunt.loadNpmTasks('grunt-processhtml');
    //grunt.loadNpmTasks('grunt-contrib-clean'); //clean
    grunt.loadNpmTasks('grunt-contrib-copy'); //copy
    grunt.loadNpmTasks('grunt-contrib-watch'); //watch
    grunt.loadNpmTasks('grunt-browser-sync'); //sync
    grunt.registerTask('default', ['copy', 'less', 'browserSync', 'watch']);

};