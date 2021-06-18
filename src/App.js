import './App.css';
import React from 'react';
import Tickets from './components/tickets/tickets'
import { connect } from 'react-redux';
import logo from './assets/logo.svg'
import Sidebar from './components/sidebar/sidebar'
import Filters from './components/filters/filters'

function App() {
  return (
    <div className="App">
      <div className="App-wrapper">
        <div className="header">
          <img src={logo} alt="logo" />
        </div>
        <div className="main">
          <Sidebar />
          <div className="section">
            <Filters />
            <Tickets />
          </div>
        </div>

      </div>
    </div>
  );
}

export default connect()(App);
