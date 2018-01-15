'use strict';

const config = require('./config');
const gulp = require('gulp');
const gulpEslint = require('gulp-eslint');
const gulpTslint = require('gulp-tslint');
const tslint = require('tslint');

gulp.task('lint:es', () =>
  gulp.src('**/*.js')
    .pipe(gulpEslint())
    .pipe(gulpEslint.format())
    .pipe(gulpEslint.failAfterError()));

gulp.task('lint:ts', () => {
  const program = tslint.Linter.createProgram('./tsconfig.json');

  return gulp.src(config.globs.lintables_ts)
    .pipe(gulpTslint({
      formatter: 'stylish',
      program,
    }))
    .pipe(gulpTslint.report());
});

gulp.task('lint', ['lint:ts', 'lint:es']);
