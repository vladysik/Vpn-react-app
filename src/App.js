import React from 'react';

import {BrowserRouter, Route, Link} from "react-router-dom";

import './App.css';

import MainComponent from './components/main-component';
import VPNComponent from './components/vpn-component';

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Route exact path="/" component={MainComponent}/>
        <Route path="/vpn" component={VPNComponent}/>
      </div>
    </BrowserRouter>
  );
}

export default App;