var gulp = require('gulp');
var less= require('gulp-less');
var path = require('path');

// compile less files from the ./styles folder
// into css files to the ./public/stylesheets folder
gulp.task('less', function () {
    return gulp.src('./src/styles/**/*.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest('./out/public/stylesheets'));
});

gulp.task('default', ['less']);
