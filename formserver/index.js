"use strict";

var _ = require('underscore');
var bodyParser = require('body-parser');
var compress = require('compression');


// Attach routes here
module.exports = function(app) {
    app.use(bodyParser.urlencoded({ encoded: true }));
    app.use(bodyParser.json());
    app.use(require('cookie-parser')());
    app.use(compress());

     // To be used for sending the bundle
     app.use('/', require('./modules/bundle'));
};
