module.exports = function(grunt) {

    //Project and task configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        /**
         * "grunt-contrib-concat": "^1.0.1"
         * https://www.npmjs.com/package/grunt-contrib-concat
         **/
        concat: {
            js: {
                src: ['node_modules/jquery/dist/jquery.js',
                    'node_modules/jquery.backstretch/jquery.backstretch.js',
                    'node_modules/lightgallery/dist/js/lightgallery.js',
                    'node_modules/lightgallery/demo/js/lg-video.js',
                    'node_modules/lightgallery/demo/js/lg-thumbnail.js',
                    'src/js/main.js'
                ],
                dest: 'dist/js/scripts.js'
            },
            css: {
                src: ['node_modules/skeleton-css/css/normalize.css',
                    'node_modules/skeleton-css/css/skeleton.css',
                    'node_modules/lightgallery/dist/css/lightgallery.css',
                    'src/css/main.css'
                ],
                dest: 'dist/css/styles.css'
            }
        },
        /**
         * "grunt-sass": "^2.0.0"
         * https://www.npmjs.com/package/grunt-sass
         **/
        sass: {
            build: {
                files: [{
                    src: 'src/sass/index.scss',
                    dest: 'src/css/main.css'
                }]
            }
        },
        /**
         * "grunt-contrib-uglify": "^3.0.1"
         * https://www.npmjs.com/package/grunt-contrib-uglify
         **/
        uglify: {
            my_target: {
                files: {
                    'dist/js/scripts.min.js': ['dist/js/scripts.js']
                }
            }
        },
        /**
         * "grunt-contrib-cssmin": "^2.2.0"
         * https://www.npmjs.com/package/grunt-contrib-cssmin
         **/
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'dist/css',
                    src: ['styles.css'],
                    dest: 'dist/css',
                    ext: '.min.css'
                }]
            }
        },
        /**
         * "grunt-contrib-copy": "^1.0.0"
         * https://www.npmjs.com/package/grunt-contrib-copy
         **/
        copy: {
            files: {
                cwd: 'src', // set working folder / root to copy
                src: 'index.html', // '**/*' copy all files and subfolders
                dest: 'dist/', // destination folder
                expand: true // required when using cwd
            }
        }
        /**
         * "grunt-contrib-pug": "^1.0.0"
         * https://www.npmjs.com/package/grunt-contrib-pug
         **/
        /*pug: {
            compile: {
                options: {
                    data: {
                        debug: false
                    }
                },
                files: {
                    'dist/index.html': ['src/index.pug']
                }
            }
        }*/
    });

    // Load Plugins
    grunt.loadNpmTasks('grunt-sass'); // grunt sass
    grunt.loadNpmTasks('grunt-contrib-uglify'); // grunt uglify
    grunt.loadNpmTasks('grunt-contrib-cssmin'); // grunt cssmin
    grunt.loadNpmTasks('grunt-contrib-concat'); // grunt concat
    grunt.loadNpmTasks('grunt-contrib-copy'); // grunt copy
    //grunt.loadNpmTasks('grunt-contrib-pug'); // grunt pug

    // Register Tasks
    grunt.registerTask('concat-js', ['concat:js']); // grunt concat-js
    grunt.registerTask('concat-css', ['concat:css']); // grunt concat-css
    //grunt.registerTask('default', ['sass']);
    //grunt.registerTask('default', ['watch']);

};
