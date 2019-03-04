const keys = require("../keys");
const Spotify = require('node-spotify-api');
const axios = require('axios');

function Music(arg2) {
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
    };

    module.exports = Music