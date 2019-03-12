import React, { Component } from 'react';
import MainContainer from './containers/MainContainer';
import OpeningPage from './containers/OpeningPage';
import { Segment } from 'semantic-ui-react'
import './App.css'

const LOCALAPI = 'http://localhost:3000'

class App extends Component {
  render() {
    return (
      <div>
       <OpeningPage />
      </div>
    );
  }
}

export default App;
