const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    
    if (error) callback(error, null);
    
    const JSONfile = JSON.parse(body);
    
    if (JSONfile.length === 0) callback("Nothing fetched!!");
    else callback(null, JSONfile[0].description);
  
  });
};

module.exports = { fetchBreedDescription };

