const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browsersync = require('browser-sync').create();

// Sass Task
function scssTask(){
  return src('src/scss/*.scss', { sourcemaps: true })
    .pipe(sass())
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('src/css', { sourcemaps: '.' }));
}

// Browsersync Tasks
function browsersyncServe(cb){
  browsersync.init({
    server: {
      baseDir: 'src'
    }
  });
  cb();
}

function browsersyncReload(cb){
  browsersync.reload();
  cb();
}

// Watch Task
function watchTask(){
  watch('*.html', browsersyncReload);
  watch(['src/scss/*.scss'], series(scssTask, browsersyncReload));
}

// Default Gulp task
exports.default = series(
  scssTask,
  browsersyncServe,
  watchTask
);