import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Form from './components/Form'


class App extends Component {
  render() {
    return (
      <div>
      <Header/>
      <Form/>
      </div>
    );
  }
}

export default App;
