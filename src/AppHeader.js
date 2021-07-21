import React, { Component, Fragment } from 'react';

/* a class automatically export itself when is called */
export default class AppHeader extends Component {

    // for state lifting
    constructor(props) {
        super(props);
        this.handlePostChange = this.handlePostChange.bind(this);
    }

    // for state lifting
    handlePostChange(posts) {
        // we are not changing anything here
        // so this is all we need
        this.props.handlePostChange(posts);
    }

    render() {

        return (
            <Fragment>
            <h1>{ this.props.title }</h1>
            <p>There are {this.props.posts.length} entries in posts</p>
            </Fragment>
        );
    }
}