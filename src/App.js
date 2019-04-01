import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from './StyledComponents/Button';

import {Colors} from "./StyledComponents/Vars";

let {PrimaryColor} = Colors;
console.log('PrimaryColor :', PrimaryColor);
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          <Button dark>ایجاد اتاق گفتگو</Button>
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
