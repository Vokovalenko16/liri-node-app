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
  console.log(data);
  console.log(data.tracks.items[0].album.artists[0].name)
});
}
};
Music(arg1,arg2)
//Spotify




//Movie
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