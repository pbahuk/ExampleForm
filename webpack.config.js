const config = (process.env.NODE_ENV === 'development') ?
	require('./webpack/webpack.config.development')
	: require('./webpack/webpack.config.production');

module.exports = config;
