const keys = require("../keys");
const Spotify = require('node-spotify-api');
const axios = require('axios');

function getBands(arg2) {
    const bands_URL = `https://rest.bandsintown.com/artists/${arg2}/events?app_id=codingbootcamp`
axios.get(bands_URL)
  .then(function (response) {

    const venue_Name = response.data[0].venue.name;
    const venue_city_Location = response.data[0].venue.city;
    const venue_country_Location = response.data[0].venue.country;
    const event_Date = response.data[0].datetime

    const concert_Results = {
      Venue: venue_Name,
      Location: venue_city_Location, venue_country_Location,
      Date: event_Date.slice(0,10)
    }
    console.log(concert_Results)
  })
  .catch(function (error) {
    console.log(error);
  });
};

module.exports = getBands