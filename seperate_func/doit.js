const fs = require('fs')
const myMusic = require("./music")
const myMovie = require("./movie")
const myConcert = require("./concert")

function randomDo() {
    fs.readFile("random.txt", "utf8", function(err, data) {
      if (err) {
        return console.log(err);
      }
      const split = data.split(", ")
    
      const commandA = split[0]
      const commandB = split[1]
    
      console.log(commandA)
    
      if (commandA === 'movie-this') {
        myMovie(commandB);
      }
      else if(commandA === 'spotify-this-song') {
        myMusic(commandB);
      }
      else if(commandA === 'concert-this') {
        myConcert(commandB);
        }
      });
    }

module.exports = {
  randomDo: randomDo,
}
