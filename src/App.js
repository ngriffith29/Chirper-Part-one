import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '.'
import Nate from './Nate';
import { Button } from 'react-bootstrap'
import Banner from './Banner'
import User from './user'
import Jumbotron from './TimelineHeader'
import Timeline from './Timeline'
class App extends Component {
  render() {
    return (
      <div>
        <Nate />
        <Banner />
        <Timeline />
        <User />

        <br />
       
        <Jumbotron />
       
      </div>
    );
  }
}

export default App;
