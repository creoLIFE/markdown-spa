/**
 * Created by miroslawratman on 23/04/15.
 */
'use strict';

var rp = require('request-promise');
var querystring = require('querystring');
var config = require('../config/config');

/**
 * Wrapper for calling a API
 */
var Api = {
    parseContent: function ( content, next ) {
        var requestOpts = {
            encoding: 'utf8',
            uri: config.apiDomain + ':' + config.apiPort + '/parse-content/' + config.parseDepth,
            method: 'POST',
            body: content,
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': content.length
            }
        };

        rp(requestOpts)
            .then(function(data) {
                next(data);
            })
            .catch(function(err) {
                console.log(err);
            });
    }
};

module.exports = Api;