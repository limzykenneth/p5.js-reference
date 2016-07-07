var gulp = require('gulp');
var insert = require('gulp-insert');
var rename = require("gulp-rename");

gulp.task('default', function() {
  return gulp.src('./dist/reference/data.json')
    .pipe(insert.prepend('referenceData = '))
    .pipe(rename('data.js'))
    .pipe(gulp.dest('dist/offline-docs/js'));
});
