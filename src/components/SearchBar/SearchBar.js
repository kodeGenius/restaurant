import React from 'react';
//import ReactDOM from 'react-dom';
import './SearchBar.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
};

//getSortByClass(sortByOption){}

class SearchBar extends React.Component{
	constructor(props){
		super(props);
		this.state = { 
			term: '',
			location: '',
			sortBy: 'best_match'
		}
	}
	renderSortByOptions() {
  		return Object.keys(sortByOptions).map(sortByOption => {
  		  let sortByOptionValue = sortByOptions[sortByOption];
  		  return<li key={sortByOptionValue}>{sortByOption}</li>
 		});
	}

	render(){
		return(
			<div className="SearchBar">
			  <div className="SearchBar-sort-options">
			    <ul>
			      {this.renderSortByOptions()}
			    </ul>
			  </div>
			  <div className="SearchBar-fields">
			    <input placeholder="Search Businesses" />
			    <input placeholder="Where?" />
			  </div>
			  <div className="SearchBar-submit">
			    <a href='1000coders.com'>Let's Go</a>
			  </div>
			</div>
		)
	}
}

export default SearchBar;