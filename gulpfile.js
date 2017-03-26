var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var mocha = require('gulp-mocha')
var browserSync = require('browser-sync');
var nodemon = require('nodemon');
var cp = require('child_process');
var tsb = require('gulp-tsb');

// compile less files from the ./styles folder
// into css files to the ./public/stylesheets folder
gulp.task('less', function () {
    return gulp.src('./src/styles/**/*.less').pipe(
        less({paths: [path.join(__dirname, 'less', 'includes')]})
    ).pipe(gulp.dest('./out/public/stylesheets'));
});

// Run mocha tests in the ./tests folder
gulp.task('test', function () {
    // gulp-mocha needs filepaths
    return gulp.src('./tests/out.test*.js', { read: false }).pipe(mocha());
});

// browserSync for client changes
gulp.task('browser-sync', ['nodemon', 'watch'], function () {
    browserSync.init(null, {
        proxy: "https://localhost:3000",
        files: ["out/**/*.*", "out/routes/**/*.*", "out/public/**/*.*", "out/views/**/*.*"],
        port: 7000,
    });
});

// run nodemon on server file changes
gulp.task('nodemon', function () {
    var started = false;
    return nodemon({
        script: 'out/www.js',
        watch: ['out/*.js']
    }).on('start', function () {
        if (!started) {
            cb();
            started = true;
        }
    }).on('restart', function onRestart() {
        setTimeout(function reload() {
            browserSync.reload({
                stream: false
            });
        }, 500);  // reload delay
    });
});

// Typescript build for /src folder
var tsConfig = tsb.create('src/tsconfig.json');
gulp.task('build', function () {
    return gulp.src('./src/**/*.ts')
        .pipe(tsConfig())
        .pipe(gulp.dest('./out'));
});

// Typsecript/less fil changes
gulp.task('watch', function() {
    gulp.watch('src/**/*.ts', ['build']);
    gulp.watch('src/styles/**/*.less', ['less']);
});

gulp.task('buildAll', ['build', 'less']);
gulp.task('default', ['browser-sync']);
