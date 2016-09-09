var express = require('express');
var router = new express.Router();
const jade = require('jade');
const wares = [];


router.get('/', wares.concat(function route(req, res, next) {
    var html = jade.renderFile('public/index.jade', {
        outline_scripts: 'window.session = ' + JSON.stringify(req.myx)
    });

    res.send(html);
}));

module.exports = router;
