'use strict';
// NODE_ENV=development webpack
const NODE_ENV = process.env.NODE_ENV || 'development'
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const rimraf = require('rimraf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AssetsPlugin = require('assets-webpack-plugin');
// const pug = require('pug');

module.exports = {
  context: __dirname + '/frontend',

  entry: { // --inline --hot
    // main: ["webpack-dev-server/client", "webpack/hot/dev-server", './main']
    main: './main'
  },

  output: {
    path:       __dirname + '/public',
    publicPath: '/',
    filename:   '[name].js'
  },
  resolve: {
    extension: ['', '.js', '.styl', 'jade']
  },
  module: {

    loaders: [{
      test:    /\.js$/,
      include: __dirname + '/frontend',
      // exclude: wrapRegexp(/\/node_modules\//, 'exclude'),
      loader:  "babel?presets[]=es2015"
    },
    {
      test: /\.html$/,
      loader: "file?name=[path][name].html"
    },
    {
      test: /\.jade$/,
      loader: "jade?pretty"
    },

     // pug
     // {
     //    test: /\.(pug|jade)$/,
     //    loader: "pug-html-loader?pretty"

     // },
     {
      test:   /\.styl$/,
      loader: ExtractTextPlugin.extract('style','css!stylus?resolve url')
    },
    // {
    //   test:   /\.styl$/,
    //   loader: 'style!css!stylus?resolve url'
    // },
    {
      test:   /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
      include: /\/node_modules\//,
      loader: 'file?name=[1].[ext]&regExp=node_modules/(.*)\/.*'
      // loader: 'file?name=[path][name].[hash:6].[ext]'
    },
    {
      test:   /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
      exclude: /\/node_modules\//,
      loader: 'file?name=[path][name].[hash:6].[ext]'
    }]

  },
  htmlLoader: {
    ignoreCustomFragments: [/\{\{.*?}}/],
    root: path.resolve(__dirname, 'public'),
    attrs: ['img:src', 'link:href']
  },
  plugins: [
  {
    apply: (compiler) => {
      rimraf.sync(compiler.options.output.path);
    }

  },
  new ExtractTextPlugin('main.css', {allChunks: true, disable: false}),
  // new webpack.HotModuleReplacementPlugin(),
  // new webpack.optimize.CommonsChunkPlugin({
  //   name: 'main'
  // }),
  new AssetsPlugin({
    filename: 'assets.json',
    path: __dirname + '/public'

  }),
  new webpack.ProvidePlugin({
    $: "jquery/dist/jquery.min.js",
    jQuery: "jquery/dist/jquery.min.js",
    "window.jQuery": "jquery/dist/jquery.min.js"
  }),
   new HtmlWebpackPlugin({
      template: './templates/index.jade',
    })
  // new HtmlWebpackPlugin({
  //   filename: 'index.html',
  //   // path: __dirname + '/public',
  //   // chunks: ['main']
  // })
  ],

  noParse:  wrapRegexp(/\/node_modules\/(angular\/angular|jquery)/, 'noParse'),

  devServer: {
    contentBase: __dirname + '/frontend',
    hot: true
  }
};
// devServer.listen(8090);
function wrapRegexp(regexp, label) {
  regexp.test = function(path) {
    console.log(label, path);
    return RegExp.prototype.test.call(this, path);
  };
  return regexp;
}