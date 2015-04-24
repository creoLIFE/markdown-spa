/** @jsx React.DOM */
/**
 * Created by miroslawratman on 23/04/15.
 */
'use strict';

var React = require('react');

/**
 * Method will generate list
 */
var TocList = React.createClass({
    render: function () {
        return (
            <Toc toc={this.props.toc} />
        )
    }
});

/**
 * Method will generate group
 */
var Toc = React.createClass({
    render: function () {
        return (
            <ul className={this.props.state}>
                {
                    this.props.toc.map(function (result) {
                        return (
                            <TocEl key={result.id} toc={result} />
                        )
                    })
                }
            </ul>
        );
    }
});

/**
 * Method will generate element
 */
var TocEl = React.createClass({
    getInitialState: function () {
        return { showSubsection: false };
    },
    tocElClick: function () {
        this.setState({ showSubsection: this.state.showSubsection ? false : true });
    },
    render: function () {
        return (
            <li>
                <a href="#" onClick={this.tocElClick} >
                    {this.props.toc.name}
                </a>
                { this.props.toc.subsections &&
                    <Toc toc={this.props.toc.subsections} state={this.state.showSubsection ? 'show' : 'hide'} />
                }
            </li>
        );
    }
});


module.exports = TocList;