const keys = require("../keys");
const Spotify = require('node-spotify-api');
const axios = require('axios');

function getMovie(arg2) {
    const api_key = "2694c0ab";
        const api_URL = `http://www.omdbapi.com/?apikey=${api_key}&t=${arg2}&type=movie&r=json`;
    axios.get(api_URL)
      .then(function (response) {
        
        const title_M = response.data.Title;
        const year_M = response.data.Year;
        const rating_M = response.data.imdbRating;
        const rating_rottentomatoes_M = response.data.Ratings[1].Value;
        const country_M = response.data.Country;
        const language_M = response.data.Language;
        const plot_M = response.data.Plot;
        const actors_M = response.data.Actors;
     
      const movie_Results = {
        title: title_M,
        year: year_M,
        imdb_rating: rating_M,
        rotten_tomatoes_rating: rating_rottentomatoes_M,
        country: country_M,
        language: language_M,
        plot: plot_M,
        actors: actors_M, 
      }
      console.log(movie_Results)
    })
      .catch(function (error) {
        console.log(error);
      });
     };

module.exports = getMovie