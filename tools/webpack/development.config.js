const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_DIR = path.join(__dirname, '..', '..', 'src');

module.exports = {
  entry: `${SRC_DIR}/modules/index.js`,
  module: {
    rules: [
      {
        test: /\.js$/,
        include: SRC_DIR,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        include: SRC_DIR,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devtool: 'source-map',
  plugins: [ new HtmlWebpackPlugin() ],
  resolve: {
    alias: {
      'modules': `${SRC_DIR}/modules`,
      'store': `${SRC_DIR}/store`,
      'actions': `${SRC_DIR}/actions`,
      'reducers': `${SRC_DIR}/reducers`,
    },
  },
};
