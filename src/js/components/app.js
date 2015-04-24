/** @jsx React.DOM */
/**
 * Created by miroslawratman on 21/04/15.
 */
'use strict';

var React = require('react');
var AppActions = require('../actions/AppActions');
var JsonBeautifer = require('pretty-data').pd;
var Toc = require('../helpers/Toc');

var App = React.createClass({
    editorChange: function (event) {
        var t = this;
        AppActions.parseMarkdown(event.target.value, function (data) {
            t.setState({
                json: JsonBeautifer.json(data),
                toc: JSON.parse(data).sections
            });
        });
    },
    getInitialState: function () {
        return {
            json: 'No JSON object',
            toc: []
        };
    },
    render: function () {
        return (
            <div className="content">
                <div className="left">
                    <h1>ToC</h1>
                    <Toc toc={this.state.toc} />
                </div>
                <div className="right">
                    <textarea className="editor" onChange={this.editorChange} />
                    <pre className="prettyprint">
                        <code>
                            {this.state.json}
                        </code>
                    </pre>
                </div>
            </div>
        )
    }
});

module.exports = App;
