// eatries
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import Yelp from './util/Yelp';

/*const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavourtown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

const businesses = [
business, business, business, business, business, business, business, business, business
];*/

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
		  businesses: []
		};
		this.searchYelp = this.searchYelp.bind(this);

	}
searchYelp(term, location, sortBy){
	Yelp.searchYelp(term, location, sortBy).then(businesses => {
		this.setState({businesses: businesses});
	});
}
  render() {
    return (
      <div class="App">
        <h1>restaurant</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses = {this.state.businesses} /> 
      </div>
    );
  }
}

export default App;
