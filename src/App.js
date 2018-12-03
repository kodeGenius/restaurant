import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';

const business = {
  imageSrc: '',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

const businesses = ['business', 'business', 'business', 'business', 'business', 'business'];

class App extends Component {
  render() {
    return (
      <div class="App">
        <h1>restaurant</h1>
        <SearchBar />
        <BusinessList businesses = {businesses} /> 
      </div>
    );
  }
}

export default App;
