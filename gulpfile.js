const gulp = require('gulp')
    nodemon = require('gulp-nodemon');


gulp.task('default', function setupNodemon() {
    return nodemon({
        script: 'index.js',
        ext: 'js',
        ignore: ['./node_modules/**/*']
    });
});