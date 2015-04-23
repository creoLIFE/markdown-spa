/**
 * Created by miroslawratman on 21/04/15.
 */
'use strict'

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var AppStore = assign({}, EventEmitter.prototype, {
    emitChange: function () {
        //this.emit(CHANGE_EVENT);
    }
});


module.exports = AppStore;
