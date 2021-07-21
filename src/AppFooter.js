import React, { Component, Fragment } from 'react';
import './AppFooter.css'

/* a class automatically export itself when is called */
export default class Appfooter extends Component {

    render() {
        const currentYear = new Date().getFullYear();
        return (
            /* Fragment is a special thing in React that allow us to
            have valid XML */
            <Fragment>
                {/* puts an horizontal row */}
                <hr />
                <p className="footer">Copyright &copy; { currentYear } Acme Ltd.</p>
            </Fragment>
        );
    }
}