import React from 'react';
import logo from "../../assets/logo.svg";
import {Link} from "react-router-dom";
import './Welcome.css'

const Welcome = () => {
  return <div className={'Welcome'} is={'Welcome'}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>welcome</p>
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link className={"App-link"} to={'stateful'}>Stateful Component</Link>
        <Link className={"App-link"} to={'backdoor'}>Backdoor</Link>
        <Link className={"App-link"} to={'auth'}>Auth</Link>
      </header>
    </div>
  </div>;
};

export default Welcome;
