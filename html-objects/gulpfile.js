// devDependencies
var gulp = require('gulp');
var sass = require('gulp-sass');

// Built-in
var path = require('path');

var paths = {
  src: './src/',
  dest: './dist/'
};

var globs = {
  sass: paths.src + '**/*.scss'
};

gulp.task('sass', function () {
  console.log("globs.sass = " + globs.sass);

  // var src = path.join(paths.src, '**/*.scss');
  // var dest = path.join(paths.build, '/css');
  // return gulp.src(src)
  //   .pipe(sass().on('error', sass.logError))
  //   .pipe(build);
});

// gulp.task('watch', function () {
//   gulp.watch('./sass/**/*.scss', ['sass']);
// });

gulp.task('default', ['sass']);
