const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { template } = require('lodash');
const StatoscopePlugin = require('@statoscope/webpack-plugin').default;
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const config = {
  entry: {
    about: './src/pages/About.js',
    home: './src/pages/Home.js',
    main: './src/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // путь к файлу index.html
    }),
    new StatoscopePlugin({
      saveStatsTo: 'stats.json',
      saveOnlyStats: false,
      open: false,
    }),
    new LodashModuleReplacementPlugin({
      collections: true,
      paths: true,
    }),
    new ESLintPlugin(),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        use: "babel-loader",
        exclude: /node_modules/,
        resolve: {
          extensions: [".js"],
        },
        sideEffects: false,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  optimization: {
    usedExports: true,
    concatenateModules: true,
    minimize: true,
    moduleIds: "deterministic",
    innerGraph: true,
    providedExports: true,
    splitChunks: {
      minSize: 20000,
      minRemainingSize: 0,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      minChunks: 1,
      chunks: "all",
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
    runtimeChunk: {
      name: "runtime",
    },
  },
  // @TODO lodash treeshaking
  // @TODO chunk for lodash
  // @TODO chunk for runtime
  // @TODO fallback for crypto
};

module.exports = config;
