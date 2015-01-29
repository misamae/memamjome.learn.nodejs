module.exports = function(grunt){

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        nodemon: {
            dev: {
                script: './server.js',
                ext: 'js'
            }
        },
        mochaRunner: {
            all: {
                scripts: [
                    'test/*.js'
                ]
            }
        },
        mocha: {
            option: {
                run: true,
                reporter: 'Spec', 
            },
            test: {
                options: {
                    urls: ['http://localhost:3000/']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-mocha');
    grunt.loadNpmTasks('grunt-mocha-runner');

    // grunt.registerTask('default', ['nodemon']);
    grunt.registerTask('default', function(){
        var taskList = ['nodemon', 'mochaRunner', 'mocha'];

        grunt.task.run(taskList);
    });

};