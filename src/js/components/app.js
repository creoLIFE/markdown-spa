/** @jsx React.DOM */
/**
 * Created by miroslawratman on 21/04/15.
 */
'use strict'

var React = require('react');
var AppActions = require('../actions/AppActions');
var JsonHelper = require('../helpers/Json');
var jsonBeautifer = require('pretty-data').pd;

var App = React.createClass({
    editorChange: function (event) {
        var t = this;
        AppActions.parseMarkdown(event.target.value, function(data){
            jsonBeautifer.json()

            var newData = {value: jsonBeautifer.json(data) };
            t.setState({data: newData});
        });
    },
    getInitialState: function() {
        return {data: {value: 'No JSON object'}};
    },
    render: function () {
        return (
            <div className="content">
                <div className="left">
                    <h1>ToC</h1>
                </div>
                <div className="right">
                    <textarea className="editor" onChange={this.editorChange} />
                    <pre className="prettyprint">
                        <code dangerouslySetInnerHTML={{__html: this.state.data.value}} />
                    </pre>
                </div>
            </div>
            )
    }
});

module.exports = App;
