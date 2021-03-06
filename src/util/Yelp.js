//api key not correct
// Generate new key for App to work
const apikey = "YqRScCgClJAqWZWGIJCNrJWkN0Y654nqJ-nMnvxklAPY0DNiNGDHF5c7xWO4lDUMPBPa7BVf9gQjKGKXmbYyNpPoMON5kbcTFPJmH7zpdlvGHdD45_q3wV6obUYv4IXHYx";

const Yelp = {
  searchYelp(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apikey}`
        }
      }
    )
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count,
            };
          });
        }
      });
  }
};

export default Yelp;

//exported




