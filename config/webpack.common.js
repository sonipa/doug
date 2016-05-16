var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  module: {
    loaders: [
      // a loader to transpile our Typescript code to ES5, guided by the tsconfig.json file
      {
        test: /\.ts$/,
        loader: 'ts'
      },
      // component templates
      {
        test: /\.html$/,
        loader: 'html'
      },
      // images and fonts to be bundled
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      // matches application-wide styles
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
      },
      // component-scoped styles (specified in a component's styleUrls metadata property)
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: 'raw'
      }
    ]
  },
  plugins: [
    
    // Webpack is not able to keep the vendor code out of the app.js bundle. We rely on the CommonsChunkPlugin for this.
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    
    // Webpack generates a number of js and css files. We could insert them into our index.html manually.
    // Webpack can inject those scripts and links for us with the HtmlWebpackPlugin.
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
