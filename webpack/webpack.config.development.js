const config = require('./webpack.config.base.js');
const ExtractTextPlugin = config.ExtractTextPlugin;

console.log('Picked up the development level file');
config.devtool = 'source-map';

config.plugins = config.plugins.concat([
    new ExtractTextPlugin('[name].css', {allChunks: true}),
]);

module.exports = config;

