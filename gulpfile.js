var gulp = require('gulp');
var gulpMinifyJs = require('gulp-uglify');
var gulpMinifyCss = require('gulp-minify-css');
var gulpRename = require('gulp-rename');

gulp.task('js', function() {
  return gulp.src('script/*.js')
    .pipe(gulpMinifyJs({mangle:false}))
  	.pipe(gulpRename("app.min.js"))
    .pipe(gulp.dest('dist'));
});

gulp.task('css', function() {
  return gulp.src('style/*.css')
    .pipe(gulpMinifyCss())
  	.pipe(gulpRename("app.min.css"))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['js', 'css']);