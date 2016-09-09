const webpack = require('webpack');
const config = require('./webpack.config.base.js');

config.plugins = config.plugins.concat([
    // new webpack.optimize.UglifyJsPlugin({
    //     compress: {
    //         warnings: false
    //     },
    //     sourceMap: false
    // }),
]);

module.exports = config;
