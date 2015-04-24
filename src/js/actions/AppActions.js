/**
 * Created by miroslawratman on 21/04/15.
 */
'use strict'

var AppDispatcher = require('../dispatcher/AppDispatcher');

var AppActions = {
    parseMarkdown: function (data, next) {
        AppDispatcher.handleParseAction({
            data: data
        }, next);
    }
}

module.exports = AppActions
