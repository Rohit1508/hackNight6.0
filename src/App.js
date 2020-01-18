import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ApiService from './services/ApiService';
import KycForm from './components/user/KycForm';

function App() {
  return (
    <div className="App">
     <KycForm/>
    </div>
  );
}

export default App;
