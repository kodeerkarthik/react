import React from 'react';
import logo from './logo.svg';
import './App.css';
import Karthi from './Karthi';

function App() {
  return (
    <div className="App">
      <Karthi/>
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
          <Karthi/>
          Jnanendra is a bad boy
        </a>
      </header>
      <Karthi/>
    </div>
  );
}

export default App;
