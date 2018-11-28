import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

class App extends Component {
  render() {
    return (
      <div class="App">
        <h1>restaurant</h1>
        <SearchBar />
        <BusinessList /> 
      </div>
    );
  }
}

export default App;
