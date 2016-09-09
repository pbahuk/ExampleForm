const path = require('path');
const express = require('express');
const jade = require('jade');
const webpack = require('webpack');
const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

const PORT = 3000;


app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    stats: {
        colors: true,
    }
}));

app.use(require('webpack-hot-middleware')(compiler));

require('./formserver')(app);

app.listen(PORT, 'localhost', err => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Listening at http:', PORT);
});
