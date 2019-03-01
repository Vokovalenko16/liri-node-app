require("dotenv").config();
var fs = require('fs')
const Spotify = require('node-spotify-api');
const axios = require('axios');
const moment = require('moment')
const keys = require("./keys");


const arg1 = process.argv[2];
const arg2 = process.argv[3];

//Spotify
function Music(arg1,arg2) {
if (arg1 === "spotify-this-song") {
var spotify = new Spotify(keys.spotify);

spotify.search({ type: 'track', query: `${arg2}`,limit: 1 }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }

  const strData = JSON.stringify(data, null, 2);

 const artist_name = data.tracks.items[0].album.artists[0].name;
 const artist_album_name = data.tracks.items[0].album.name;
 const song_name = data.tracks.items[0].name;
 const preview_URL = data.tracks.items[0].preview_url


 const songInfo = {
   Name: artist_name,
   Album_Name: artist_album_name,
   Song_Name: song_name,
   Preview_URL: preview_URL
 }
 console.log(songInfo)
  });
 }
};
Music(arg1,arg2)
//Spotify




//Movie
const api_key = "2694c0ab";
const api_URL = `http://www.omdbapi.com/?apikey=${api_key}&t=${arg2}&type=movie&r=json`;

function getMovie() {
  if (arg1 === "movie-this") {
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
};
getMovie(arg1,arg2)
 //Movie


 
//Concert
//Concert

//Do
//Do



//   fs.appendFile("sample.txt", newData, function(err) {

//     // If an error was experienced we will log it.
//     if (err) {
//       console.log(err);
//     }
//   });