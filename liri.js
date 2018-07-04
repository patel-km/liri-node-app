
require("dotenv").config();


var keys = require('./assets/keys');

var Twitter = require('twitter');

var Spotify = require('node-spotify-api');

var request = require("request");

// Keys reference
var twitter = new Twitter(keys.twitter);
var spotify= new Spotify (keys.spotify);

var arg3 = process.argv.slice(3);



function songMe () {

  console.log(arg3);

  spotify.search({ type: 'track', query: arg3 }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }

    var artist = data.tracks.items[0].album.artists[0].name;
    var album = data.tracks.items[0].album.name;
    var track = data.tracks.items[0].name;
    var preview = data.tracks.items[0].external_urls.spotify;
    
    console.log("Artist(s): " + artist);
    console.log("Album: " + album);
    console.log("Song: " + track);
    console.log("Preview here: " + preview); 
  
  });
}


function myTweets(){

  var params = {screen_name: 'pizzahut', count: 20};

  twitter.get('statuses/user_timeline', params, function(error, tweets, response) {

    if (!error) {
      for(var i = 0; i < tweets.length; i++)
        console.log(tweets[i].text + "\n" + tweets[i].created_at + "\n");
    }
  });
}


function movieThis() {

  var movieName = process.argv.slice(3);

  var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

  request(queryUrl, function(error, response, body) {

    if (!error && response.statusCode === 200) {

      console.log("Title: " + JSON.parse(body).Title);
      console.log("Release Year: " + JSON.parse(body).Year);
      console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
      // console.log("Rotten Tomatoes Rating: " + JSON.parse(body[2].value));
      console.log("Produced In: " + JSON.parse(body).Country);
      console.log("Language: " + JSON.parse(body).Language);
      console.log("Plot: " + JSON.parse(body).Plot);
      console.log("Actors: " + JSON.parse(body).Actors);
    }
  });
}




// Switch which calls the functions as the user types in certain calls the command line.
var userInput = process.argv[2];

switch(userInput){
    case 'my-tweets':
    myTweets();
    break;
    
    case 'spotify-this-song':
    songMe();
    break;

    case 'movie-this':
    movieThis(process.argv.slice(3));
    break;

    case 'do-what-it-says':
    console.log("");
    break;
}