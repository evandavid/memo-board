const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const ManifestPlugin = require('webpack-manifest-plugin');

const common = {
  entry: './src/index.tsx',
  output: {
    filename: 'app.[hash].js',
    path: path.resolve(__dirname, 'build'),
    library: 'memoBoard',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.tsx?$/,
        exclude: /\.spec.tsx?$/,
        loader: 'babel-loader',
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.(html|css)$/,
        use: 'raw-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new webpack.IgnorePlugin(/moment/),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new CleanWebpackPlugin(),
    new ManifestPlugin(),
  ],
};

module.exports =
  process.env.NODE_ENV === 'production'
    ? merge(common, {
        mode: 'production',
      })
    : merge(common, {
        mode: 'development',
        watch: true,
        devServer: {
          host: '0.0.0.0',
          port: '3000',
          hot: true,
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
          historyApiFallback: true,
        },
      });
