module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.JSON'),
        watch: {
            target: {
                files: ['js/*.js','css/*.css'],
                task: ['uglify','cssmin']
            }
        },
        uglify: {
            options: {
                mangle: 'false'
            },
            target: {
                files: {
                    'js/combined.min.js': ['js/dropdown.js', 'js/util.js']
                }
            }
        },
        cssmin: {
            combine: {
                files: {
                    'css/combined.css': ['css/custom.css', 'css/menu.css']
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch']);
};