/**
 * Created by miroslawratman on 21/04/15.
 */
'use strict';

var Dispatcher = require('flux').Dispatcher;
var Assign = require('object-assign');
var Api = require('../services/Api');


var AppDispatcher = Assign(new Dispatcher(), {
    handleParseAction: function (data, next) {
        Api.parseContent(data, function(res){
            next(res);
        });
    }
});

module.exports = AppDispatcher;
