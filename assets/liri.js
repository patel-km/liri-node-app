
require("dotenv").config();



var keys = require('./keys');

var Twitter = require('twitter');

var request = require("request");

// Keys reference
var twitter = new Twitter(keys.twitter);
var spotify= keys.spotify;

var movieName = "";

 /*
function name() {
    var params = {screen_name: 'nodejs'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
        console.log(tweets);
    }
    });
}
*/


/*
request(long url..)
*/
var arg3 = process.argv.slice(3);

// function songMe (arg3) {
//     console.log('other argv is: ' + arg3);
//     console.log("Artist(s): " + );
//     console.log("Song: " +);
//     console.log("Preview here: " + );
//     console.log("Album: " + );
// }


// function myTweets(){

//   // API doc

  
//     console.log("TWEETS FUNCTION FIRED!-- put variable for showing those 20 tweets here");
//     //show last 20 tweets and when they were created.
// }


function movieThis() {

  var movieName = process.argv.slice(3);

  var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

  console.log(queryUrl);


  request(queryUrl, function(error, response, body) {

    // If the request is successful
    if (!error && response.statusCode === 200) {

      console.log("Title: " + JSON.parse(body).Title);
      console.log("Release Year: " + JSON.parse(body).Year);
      console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
      // console.log("Rotten Tomatoes Rating: " + JSON.parse(body).2(Value));
      console.log("Produced In: " + JSON.parse(body).Country);
      console.log("Language: " + JSON.parse(body).Language);
      console.log("Plot: " + JSON.parse(body).Plot);
      console.log("Actors: " + JSON.parse(body).Actors);
    }
  });
}





var userInput = process.argv[2];

switch(userInput){
    case 'my-tweets':
    myTweets();
    break;
    
    case 'spotify-this-song':
    songMe(process.argv.slice(3));
    break;

    case 'movie-this':
    movieThis(process.argv.slice(3));
    break;

    case 'do-what-it-says':
    console.log("");
    break;
}

// Random movie function code idk about.
  // for (var i = 2; i < nodeArgs.length; i++) {

    //   if (i > 2 && i < nodeArgs.length) {
    
    //     movieName = movieName + "+" + nodeArgs[i];
    
    //   }
    
    //   else {
    
    //     movieName += nodeArgs[i];
    
    //   }
    // }