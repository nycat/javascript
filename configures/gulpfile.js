const gulp = require('gulp')
const scss = require('gulp-scss')
const notify = require('gulp-notify')
const browserSync = require('browser-sync').create()
const reload = browserSync.reload
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const rename = require('gulp-rename')

const baseDir = './'

gulp.task('serve', () => {
  browserSync.init({
    server: {
      baseDir
    }
  })
})

gulp.task('scss', () => {
  return gulp.src(baseDir + '/*/scss/*.scss')
    .pipe(postcss([ autoprefixer()]))
    .pipe(scss())
    .pipe(rename(path => {
      let dirname = path.dirname.split('/')[0]
      path.dirname = `${dirname}`
    }))
    .pipe(gulp.dest(baseDir + '/css'))
    .pipe(reload({stream: true}))
    .pipe(notify('scss compiled'))
})

gulp.task('default', ['serve'], () => {
  gulp.watch(baseDir + '/*/scss/*.scss', ['scss'])
  gulp.watch(baseDir + '/*/*.html').on('change', reload)
})
