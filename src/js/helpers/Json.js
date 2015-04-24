/**
 * Created by miroslawratman on 23/04/15.
 */
'use strict';

var json = {
    replacer: function(match, pIndent, pKey, pVal, pEnd) {
        var key = '<span class=json-key>';
        var val = '<span class=json-value>';
        var str = '<span class=json-string>';
        var r = pIndent || '';
        console.log('pkey ' + pKey);
        if (pKey){
            r = r + key + pKey.replace(/[": ]/g, '') + '</span>: ';
            console.log('pkey ' + pKey);
        }
        if (pVal){
            r = r + (pVal[0] == '"' ? str : val) + pVal + '</span>';
            console.log('pval ' + pVal);
        }
        return r + (pEnd || '');
    },
    prettyPrint: function(obj) {
        var jsonLine = /^( *)("[\w]+": )?("[^"]*"|[\w.+-]*)?([,[{])?$/mg;
        return JSON.stringify(obj, null, 3)
            .replace(/&/g, '&amp;').replace(/\\"/g, '&quot;')
            .replace(/</g, '&lt;').replace(/>/g, '&gt;')
            .replace(jsonLine, json.replacer);
    }
};

module.exports = json;