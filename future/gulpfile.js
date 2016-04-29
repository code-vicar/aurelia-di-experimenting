var gulp = require('gulp')
var sourcemaps = require('gulp-sourcemaps')
var babel = require('gulp-babel')
var del = require('del')

gulp.task('default', ['clean'], function() {
    return gulp.src('src/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015', 'stage-1'],
            plugins: ['transform-decorators-legacy']
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'))
})

gulp.task('clean', function() {
    return del('dist')
})
