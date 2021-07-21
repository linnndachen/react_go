import React, { Component } from 'react';
// DOM: Document Object Model
import ReactDOM from 'react-dom';
import AppHeader from './AppHeader';
import AppContent from './AppContent';
// import Appfooter from './AppFooter';
import AppFooterFunctionalComponent from './AppFooterFunctionalComponent';

/* path to the min template */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";

class App extends Component {

  // for state lifting
  constructor(props) {
    super(props);
    this.handlePostChange = this.handlePostChange.bind(this);
    this.state = {posts: []};
  }

  // for state lifting
  handlePostChange(posts) {
    this.setState({posts: posts})
  }

  /* must have for react app*/
  render() {
    /* allow us to pass multiple properties concisely*/
    const myProps = {
      title: "My Cool App!",
      subject: "My subject",
      favor_color: "red",
    }
    /* synatx here looks like HTML. Though this is js file,
    this is called jsx file, which allos this syntax*/
    return (
      <div className="app">
        <AppHeader {...myProps} posts={this.state.posts} handlePostChange={this.handlePostChange} />
        <AppContent posts={this.state.posts} handlePostChange={this.handlePostChange} />
        {/* <Appfooter /> */}
        <AppFooterFunctionalComponent />
      </div>
    );
  }   
}

/* 
1. what comp you want to render - App
2. where do you want to render
*/
ReactDOM.render(<App />, document.getElementById('root'));
