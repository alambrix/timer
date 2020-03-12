const gulp = require('gulp');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const gulpIf = require('gulp-if');
const gulpVars = require('require-dir')('../gulp-vars');
const isProduction = gulpVars.vars();
const path = require('path');
const ModernizrWebpackPlugin = require("modernizr-webpack-plugin");

//**
//
// Webpack
//
//**

var config = {
  "options" : [
		"setClasses",
		"addTest",
		"html5printshiv",
		"testProp",
		"fnBind",
	],
  "feature-detects": [
    'touchevents',
  ],
  minify: true,
}

var mode = 'development';

if( isProduction ){
  mode = 'production';
}

gulp.task('webpack', () => {
  return gulp.src('source/assets/js/main.js')
    .pipe(
      webpackStream({
        output: {
          filename: 'bundle.js',
          sourceMapFilename: 'bundle.map',
        },
        mode: mode,
        devtool: 'source-map',
        plugins: [
          new ModernizrWebpackPlugin(config),
          new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
          }),
        ],
        module: {
          rules: [
            {
              test: /\.m?js$/,
              exclude: /(node_modules)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            }
          ]
        },
        resolve: {
          alias: {
            jquery: path.resolve('node_modules', 'jquery/dist/jquery.js'),
          }
        }
      }, webpack)
    )
    .pipe(gulp.dest('build/assets/js'));
});
