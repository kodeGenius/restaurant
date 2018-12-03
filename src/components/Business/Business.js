import React from 'react';
//import ReactDOM from 'react-dom';
import './Business.css';



class Business extends React.Component{
	render(){
		return (
		<div className="Business">
		  <div className="image-container">
		    {business.imageSrc}
		  </div>
		  <h2>{business.name}</h2>
		  <div className="Business-information">
		    <div className="Business-address">
		      <p>{business.address}</p>
		      <p>Bordertown</p>
		      <p>NY 10101</p>
		    </div>
		    <div className="Business-reviews">
		      <h3>{business.category}</h3>
		      <h3 className="rating">{business.rating} stars</h3>
		      <p>{business.reviewCount} reviews</p>
		    </div>
		  </div>
		</div>

		)
	}
};

export default Business;