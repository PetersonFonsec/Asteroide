const gulp   = require( 'gulp' )
const babel  = require( 'gulp-babel' )
const concat = require( 'gulp-concat' )
const uglifyCss = require( 'gulp-uglifyCss' )
const htmlMin = require( 'gulp-htmlmin' )
const tarefas = [ 'gulp-js', 'gulp-css', 'gulp-html', 'gulp-img' ]
const pastaFinal = 'build/' 

gulp.task( 'default', tarefas )

gulp.task( tarefas[ 0 ], () => {
    const prioridade = 'src/js/_utils.js'
    return gulp.src( [ prioridade, 'src/**/*.js'] )
               .pipe( babel({
                   minified : true,
                   comments : false,
                   presets  : [ 'env' ]
               }) )
               .pipe( concat( 'Principal.min.js' ) )
               .pipe( gulp.dest( pastaFinal ) )
               .on( 'error', err => console.log( err ) )
})

gulp.task( tarefas[ 1 ], () => {
    return gulp.src( 'src/**/*.css' )
               .pipe( concat( 'estilo.min.css' ) )
               .pipe( uglifyCss() )
               .pipe( gulp.dest( pastaFinal ) )
               .on( 'error', err => console.log( err ) )
})

gulp.task( tarefas[ 2 ], () => {
    return gulp.src( 'src/**/*.html' )
               .pipe( htmlMin( { collapseWhitespace : true } ) )
               .pipe( gulp.dest( pastaFinal ) )
               .on( 'error', err => console.log( err ) )
})

gulp.task( tarefas[ 3 ], () => {
    return gulp.src( 'src/img/**/*.*' )
               .pipe( gulp.dest( `${ pastaFinal }img/` ) )
               .on( 'error', err => console.log( err ) )
})