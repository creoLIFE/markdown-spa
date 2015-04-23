/** @jsx React.DOM */
/**
 * Created by miroslawratman on 21/04/15.
 */
'use strict'

var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var App = React.createClass({
    editorChange: function (event) {
        AppActions.parseMarkdown(event.target.value);
    },
    render: function () {
        return (
            <div className="content">
                <div className="left">
                    <h1>ToC</h1>
                </div>
                <div className="right">
                    <ul>
                        <li>
                            <a href="#">Editor</a>
                        </li>
                        <li>
                            <a href="#">Parser</a>
                        </li>
                    </ul>
                    <textarea className="editor" onChange={this.editorChange}></textarea>
                    <div className="parser"></div>
                </div>
            </div>
            )
    }
});

module.exports = App;
