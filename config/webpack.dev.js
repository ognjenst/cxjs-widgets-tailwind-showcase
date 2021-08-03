const webpack = require('webpack'),
   { merge } = require('webpack-merge'),
   common = require('./webpack.config'),
   path = require('path');

process.env.TAILWIND_MODE = 'watch';

module.exports = async () => {
   return merge(common({ tailwindOptions: {}, rootCssLoader: 'style-loader' }), {
      mode: 'development',

      plugins: [new webpack.HotModuleReplacementPlugin()],
      snapshot: {
         managedPaths: ['/node_modules'],
         immutablePaths: ['/node_modules'],
      },

      devtool: 'eval',

      output: {
         publicPath: '/',
      },

      devServer: {
         hot: true,
         port: 5544,
         noInfo: false,
         inline: true,
         historyApiFallback: true,
         contentBase: path.join(__dirname, '../public'),
      },
   });
};
