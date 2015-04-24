/**
 * Created by miroslawratman on 21/04/15.
 */
'use strict'

var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');
var Api = require('../services/api');


var AppDispatcher = assign(new Dispatcher(), {
    handleParseAction: function (object, next) {
        var t = this;
        Api.parseContent(object.data, function(data){
            next(data);
        });
    }
});

module.exports = AppDispatcher;
