var gulp = require('gulp');
var insert = require('gulp-insert');
var rename = require("gulp-rename");
var rjs = require('gulp-requirejs');
var yuidoc = require("gulp-yuidoc");

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

gulp.task('yuidoc', function(){
  gulp.src(['./src/lib', './src/lib/addons/'])
    .pipe(yuidoc({
      project: {
        name: '<%= pkg.name %>',
        description: '<%= pkg.description %>',
        version: '<%= pkg.version %>',
        url: '<%= pkg.homepage %>',
        options: {
          themedir: './src/yuidoc-p5-theme/',
          helpers: ['./src/yuidoc-p5-theme/helpers/helpers.js'],
          preprocessor: './src/preprocessor.js',
          outdir: './dist/reference/'
        }
      }
    }))
    .pipe(gulp.dest('./'));
});
