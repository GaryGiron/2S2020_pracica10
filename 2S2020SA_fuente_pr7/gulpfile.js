var gulp = require('gulp');
var zip = require('gulp-zip');

gulp.task('zipper', function(){
    return gulp.src('src/*')
    .pipe(zip('app.zip'))
    .pipe(gulp.dest('dist'))
});

gulp.task('default', gulp.series('zipper'));