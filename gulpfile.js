var gulp = require('gulp');
var less= require('gulp-less');
var tsb = require('gulp-tsb');
var path = require('path');
var tsconfig = tsb.create('tsconfig.json');

// compile less files from the ./src/styles folder
// into css files to the ./public/stylesheets folder
gulp.task('less', function () {
    return gulp.src('./src/styles/**/*.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest('./public/stylesheets'));
});

// typescript builder
gulp.task('ts', function () {
    return gulp.src('./src/**/*.ts')
        .pipe(tsconfig())
        .pipe(gulp.dest('./public'));
});

// gulp.task('buildAll', ['build', 'less']);
gulp.task('default', ['ts', 'less']);
