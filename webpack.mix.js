require('dotenv').config()
const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.runtime.esm.js'
        }
    }
})

mix.js('resources/js/app.js', 'public/js')
    .styles('resources/css/style.css', 'public/css/style.css')
    .copy('resources/images', 'public/images')
    .browserSync({
        proxy: 'http://localhost:8000',
        open: false
    })

mix.options({
    extractVueStyles: 'public/css/vue-style.css'
})
