const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  // mode: 'development',
  mode: 'production',
    entry: './src/index.js',
  output: {
    filename: '[name][contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: '[name][ext]',
    clean: true,
  },
  performance: {
    hints: false,
    maxAssetSize: 512000,
    maxEntrypointSize: 512000,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
      port: 9000,
      hot: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,        
        type: 'asset/resource' 
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'My Web Page',
    filename: 'index.html',
    template: 'src/index.html',
  })],
};