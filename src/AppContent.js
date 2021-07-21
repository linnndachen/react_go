import React, { Component } from 'react';

export default class AppContent extends Component {

    // for state lifting
    constructor(props) {
        super(props);
        this.handlePostChange = this.handlePostChange.bind(this);
    }

    // for state lifting
    handlePostChange(posts) {
        this.props.handlePostChange(posts);
    }

    /* The function of what Fetch Data button would do. 
    Defining funcions with an arrow allow us to have acces to "this",
    or other functions outside of this scoop. */
    fetchList = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then(json => {
                this.handlePostChange(json);
            })
    }

    clickedItem = (x) => {
        console.log("clicked", x);
    }

    render(){
        return (
            <div> 
                This is the content.

                <br />
                <hr />

                <button onClick={this.fetchList} className="btn btn-primary" href="#"> Fetch Data </button>

                <hr />

                <p>Posts is {this.props.posts.length} items long</p>

                <ul>
                    {/* iterate over each post. Each iteration of the map
                    will populate the variable c with the current val of
                    that iteration. */}
                    {this.props.posts.map((c) => (
                        <li key={c.id}>
                            <a href="#!" onClick={() => this.clickedItem(c.id)}>
                                {c.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}