import React from 'react';
//import ReactDOM from 'react-dom';
import './SearchBar.css';

class SearchBar extends React.Component{
	constructor(props){
		super(props);
		this.state = { 
			term: '',
			location: '',
			sortBy: 'best_match'
		}
		this.handleSortByChange = this.handleSortByChang.bind(this);
		this.handleTermChange = this.handleTermChange.bind(this);
		this.handleLocationChange = this.handleLocationChange.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
	}

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
}

getSortByClass(sortByOption){
	if (this.state.sortBy === sortByOptions){
		return 'active';
	} else { 

		return ' ';
	}
}
handleSortByChange(sortByOption){
	this.setState({
		sortBy: sortByOption
	})
}
handleTermChange(event){
	this.setState({
		term: event.target.value
	})
}
handleLocationChange(event){
	this.setState({
		location: event.target.value
	})
}
handleSearch(event){
	this.props.searchYelp
	event.preventDefault()
	}

	renderSortByOptions() {
  		return Object.keys(sortByOptions).map(sortByOption => {
  		  let sortByOptionValue = sortByOptions[sortByOption];
  		  return<li onClick= {handleSortByChange.bind(this, sortByOptionValue)} className = {getSortByClass(sortByOptionValue)} key={sortByOptionValue}>{sortByOption}</li>
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
			    <input onChange = {this.handleTermChange} placeholder="Search Businesses" />
			    <input onChange={this.handleLocationChange} placeholder="Where?" />
			  </div>
			  <div className="SearchBar-submit">
			    <a href='1000coders.com'>Let's Go</a>
			  </div>
			</div>
		)
	}
}

export default SearchBar;