import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '.'
import Nate from './Nate';
import { Button } from 'react-bootstrap'
import Banner from './Banner'
import User from './user'
import Th from './TimelineHeader'
import Timeline from './Timeline'
class App extends Component {
  render() {
    return (
      <div>
        <Nate />
        <Banner />
        <User />
        <br />
        <Th />
        <Timeline />
      </div>
    );
  }
}

export default App;
