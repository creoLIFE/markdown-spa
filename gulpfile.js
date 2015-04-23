var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');

gulp.task('browserify', function() {
    gulp.src('src/js/main.js')
      .pipe(browserify({transform:'reactify'}))
      .pipe(concat('main.js'))
      .pipe(gulp.dest('public/js'));
});

gulp.task('copy', function() {
    gulp.src('src/index.html')
        .pipe(gulp.dest('public'));
    gulp.src('src/css/*')
        .pipe(gulp.dest('public/css'));
    gulp.src('src/lib/*')
        .pipe(gulp.dest('public/lib'));
});

gulp.task('default',['browserify', 'copy']);

//gulp.task('watch', function() {
//    gulp.watch('src/**/*.*', ['default']);
//});
