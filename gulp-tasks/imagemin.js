const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

//**
//
// General Load Task / options
//
//**

gulp.task('images', () => {
  gulp.src('source/assets/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/assets/images'))
});
