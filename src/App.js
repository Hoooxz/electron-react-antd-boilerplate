import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import UI Components
import { Modal, Button } from 'antd';

// get electron module
const electron = window.require('electron');  
const { ipcRenderer } = electron; 

class App extends Component {
  getMsg(e) {
    let res = ipcRenderer.sendSync('getMsg')
    let modal = Modal.success({
      title: 'Main: ' + res.msg,
      content: 'Get a message from MainProcess',
    });
    setTimeout(() => modal.destroy(), 10000);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button type="primary" onClick={(e) => this.getMsg(e)}>Button</Button>
      </div>
    );
  }
}

export default App;
