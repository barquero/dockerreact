import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            O Barquero é o <code>MAIOR</code> Yessss
          </p>
          <a
            className="App-link"
            href="https://kk.pt"
            target="_blank"
            rel="noopener noreferrer"
          >
            KuantoKusta
          </a>
        </header>
      </div>
    );
  }
}

export default App;
