import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DoubleNavbar } from './Navbar';
import { HeaderTabs } from './Header';

var a =["1","2"];

function App() {
  return (
    <div className="App">
      <HeaderTabs  user={{name : "Mrh" , image : ""}} tabs= {a} /> 
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
