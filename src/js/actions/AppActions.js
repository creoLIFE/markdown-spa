/**
 * Created by miroslawratman on 21/04/15.
 */
'use strict'

var AppDispatcher = require('../dispatcher/AppDispatcher');

var AppActions = {
    parseMarkdown: function (data) {
        AppDispatcher.handleParseAction({
            data: data
        })
    }
}

module.exports = AppActions
