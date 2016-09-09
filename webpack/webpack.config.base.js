const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const config = {
    entry: [
        './src/index.js',
    ],
    module: {
        preLoaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'eslint-loader',
            },
        ],
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'react-hot!babel',
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!less!postcss-loader')
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!less!postcss-loader')
            },
            {
               test: /\.json$/,
               loader: 'json',
            },
        ],
    },
    postcss: [autoprefixer({ browsers: ['last 2 versions'] })],
    ExtractTextPlugin,


    // Output of the multiple loaders will be saved into the /public folder
    output: {
        path: path.resolve(__dirname, '../public'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['', '.js'],
    },
    devServer: {
        contentBase: './public',
        hot: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('[name].css', {allChunks: true})
    ],
};

module.exports = config;
