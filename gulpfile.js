'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
   return gulp
      .src('src/scss/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('src/css'));
});

gulp.task('default', () => {
   gulp.watch('src/scss/*.scss', gulp.series('sass'));
   gulp.watch('src/*.html');
});
