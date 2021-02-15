const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const resolve = require('path').resolve;
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const config = {
 devtool: 'eval-source-map',
 entry: __dirname + '/js/index.tsx',
 output:{
      path: resolve('../public'),
      filename: 'bundle.js',
      publicPath: resolve('../public')
},
 resolve: {
  extensions: ['.js','.jsx','.tsx','.css']
 },
 module: {
  rules: [
  {
   test: /\.tsx?/,
   use: 'ts-loader'
  },
  {
         test: /\.css$/i,
         use:['style-loader','css-loader']
  },
  {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
     use:{
           loader:'url-loader'
     }
    },
]
 },
 plugins: [
       new ForkTsCheckerWebpackPlugin(),
       new TerserPlugin()
     ]
};
module.exports = config;
