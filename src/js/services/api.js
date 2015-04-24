/**
 * Created by miroslawratman on 23/04/15.
 */
'use strict';

var Rp = require('request-promise');
var Config = require('../config/config');

/**
 * Wrapper for calling a API
 */
var Api = {
    parseContent: function ( content, next ) {
        var requestOpts = {
            encoding: 'utf8',
            uri: Config.apiDomain + ':' + Config.apiPort + '/parse-content/' + Config.parseDepth,
            method: 'POST',
            body: content,
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': content.length
            }
        };

        Rp(requestOpts)
            .then(function(data) {
                next(data);
            })
            .catch(function(err) {
                console.log(err);
            });
    }
};

module.exports = Api;