import React, { Component } from 'react';
import Header from "./components/Header";
import TouitContainer from "./components/TouitContainer";
import TrendContainer from "./components/TrendContainer";
import SendMessageForm from "./components/SendMessageForm";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SendMessageForm />
        <div className="container">
          <TouitContainer/>
          <TrendContainer/>
        </div>
      </div>
    );
  }
}

export default App;
