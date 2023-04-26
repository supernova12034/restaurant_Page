const { type } = require('os');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  //this lets you load image files in your 
  //js code.
  module:{
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
  },
};