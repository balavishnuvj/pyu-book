import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Shelves from './containers/Shelves';
import Search from './containers/Search';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Shelves} />
          <Route path="/search/" component={Search} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  appReducer: state.appReducer,
})

const mapDispatchToProps = dispatch => ({
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

