import { src, dest, watch, series } from 'gulp';
import gulpSass from 'gulp-sass'; 
import * as dartSass from 'sass'
import { glob } from 'glob'
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const sass = gulpSass(dartSass)

export function js ( done ) {
    src( 'src/js/app.js' ).pipe( dest( 'dist/js' ) );
    done();
}

export function css ( done ) {
    src( 'src/scss/app.scss', {sourcemaps: true} )
    .pipe(sass().on('error', sass.logError))
    .pipe( dest( 'dist/css', {sourcemaps: true} ))
    done();
} 

export function renderFunction () {
    watch( 'src/scss/**/*.scss', css );
    watch( 'src/js/**/*.js', js)
}

export default series(js, css, renderFunction);