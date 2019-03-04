//Imported functions
const myMusic = require("./seperate_func/music")
const myMovie = require("./seperate_func/movie")
const myConcert = require("./seperate_func/concert")
const myCommand = require("./seperate_func/doit")
//Imported functions

const arg1 = process.argv[2];
const arg2 = process.argv[3];

runThis(arg1,arg2)

function runThis(arg1,arg2) {
  if (arg1 === "spotify-this-song" && arg2) {
    myMusic(arg2)
  }
  else if (arg1 === "spotify-this-song") {
    const songInfo = {
      Name: "Ace of Base",
      Album_Name: "Greatest Hits",
      Song_Name: "The Sign",
      Preview_URL: "https://open.spotify.com/album/0nQFgMfnmWrcWDOQqIgJL7"
    }
    console.log(songInfo)
  }
  else if (arg1 === "movie-this" && arg2) {
    myMovie(arg2)
  }
  else if (arg1 === "movie-this") {
    myMovie("Mr. Nobody")
  }
  else if (arg1 === "concert-this") {
    myConcert(arg2)
  }
  else if (arg1 === "do-what-it-says") {
    myCommand.randomDo()
  }
};

