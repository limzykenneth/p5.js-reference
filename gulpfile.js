var gulp = require('gulp');
var insert = require('gulp-insert');
var rename = require("gulp-rename");
var rjs = require('gulp-requirejs');

gulp.task('default', function() {
  return gulp.src('data.json')
    .pipe(insert.prepend('referenceData = '))
    .pipe(rename('data.js'))
    .pipe(gulp.dest('dist/reference'));
});

gulp.task('requirejs', function() {
  rjs({
    baseUrl: './src/yuidoc-p5-theme-src/scripts/',
    mainConfigFile: './src/yuidoc-p5-theme-src/scripts/config.js',
    name: 'main',
    out: './dist/reference/assets/js/reference.js',
    optimize: 'none',
    generateSourceMaps: true,
    findNestedDependencies: true,
    wrap: true,
    paths: {
        'jquery': 'empty:'
    }
  })
    .pipe(gulp.dest('./'));
});
