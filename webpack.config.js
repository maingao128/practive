'use strict';

const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const chalk = require('chalk');
const pkg = require('./package.json');
const compilerDone = require('./compilerDone');

const PAGE_SOURCE_PATH = 'src/pages';
const cwd = process.cwd();
// get entries
function generateEntries() {
  return fs.readdirSync(path.resolve(cwd, PAGE_SOURCE_PATH)).filter(dir => dir.indexOf('.') < 0);
}

const pages = generateEntries();

// define entries
const entries = {};

pages
.filter(dir => dir.indexOf('.') < 0)
.forEach(dir => entries[dir] = path.resolve(cwd, PAGE_SOURCE_PATH, dir, 'index.js'));

const Plugins = pages.map((pageName) => (
  new HtmlWebpackPlugin({
    inject: false,
    chunks: [ pageName ],
    filename: `${pageName}/index.html`,
    template: 'template.ejs',
    version: pkg.version,
    pageName: pageName
  })
))

Plugins.push(new compilerDone(`http://127.0.0.1:${process.env.DEV_SERVER_PORT || 9000}/build/pages/${pages[0]}/index.html`))

// export config
module.exports = {
  entry: entries,

  output: {
    filename: '[name]/index.js',
    path: path.resolve(cwd, 'build/pages')
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: [ 'babel-loader']
      },
      {
        test: /\.scss$/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader"
        }, {
           loader: "postcss-loader",
           options: {
              plugins: function () {
                return [
                  require('autoprefixer')({
                    browsers: [
                      'Chrome > 40',
                      'ios >= 7',
                      'android >= 4'
                    ]
                  })
                ];
              }
            }
        }, {
            loader: "sass-loader"
        }]
      }
    ]
  },

  externals : {
    react: 'React',
    'react-dom': 'ReactDOM'
  },

  plugins: Plugins,

  devServer: {
    disableHostCheck: true,
    host: '0.0.0.0',
    contentBase: cwd,
    compress: true,
    port: process.env.DEV_SERVER_PORT || 9000,
    noInfo: false,
    stats: process.env.STATS_LEVEL || 'minimal',
    publicPath: '/build/pages/'
  }
};
