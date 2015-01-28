module.exports = function(grunt){

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        nodemon: {
            dev: {
                script: './server.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-nodemon');

    // grunt.registerTask('default', ['nodemon']);
    grunt.registerTask('default', function(){
        var taskList = ['nodemon'];

        grunt.task.run(taskList);
    });

};