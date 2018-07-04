import React, { Component, Fragment } from 'react';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Exercises from './Exercises';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <Exercises/>
        <Footer/>
      </Fragment>
    );
  }
}

export default App;
