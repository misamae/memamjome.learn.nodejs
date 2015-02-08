//gulpfile.js
var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    del = require('del'),
    runSequence = require('run-sequence'),
    browserSync = require('browser-sync'),
    pagespeed = require('psi'),
    reload = browserSync.reload,
    nodemon = require('gulp-nodemon')();

gulp.task('jshint', function () {
    return gulp.src(['/api/*.js', '/data/*.js'])
        .pipe(reload({ stream: true, once: true }))
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish'))
        .pipe($.if(!browserSync.active, $.jshint.reporter('fail')));
});

gulp.task('serve', function () {
    
    // browserSync({
    //     notify: false,
    //     logPrefix: 'browser-sync'//,
    //     // server: ['.tmp', './'],
    //     // port: 5000
    // });

    gulp.watch(['api/*.js', 'data/*.js'], reload);

    nodemon({ script: 'app.js' })
    .on('error', function (err){
        console.error(err);
    })
    .on('restart', function () {
        console.info('server restarted');
    });
})

gulp.task('default', function(cb){

    console.log('starting gulp default task');
    runSequence('jshint', ['serve'], cb);

});