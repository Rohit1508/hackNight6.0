import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ApiService from './services/ApiService';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          <code>src/App.js</code>
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
<button onClick={() => ApiService.stockSettlementDetails()}>WKHEFHGUWER</button>
        </a>
      </header>

    </div>
  );
}

export default App;
