/**
 * Created by miroslawratman on 21/04/15.
 */
'use strict'

var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

var AppDispatcher = assign(new Dispatcher(), {
    handleParseAction: function (object) {
        console.log(object.data);
        this.dispatch(object.data
        );
    }
});

//AppDispatcher.register(function (payload) {
//    console.log(payload);
//    return true;
//});

module.exports = AppDispatcher;
