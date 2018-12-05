const apikey = "";

const Yelp = {};

search(term, location, sortBy){
	return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, )
}