
require("dotenv").config();

var keys = require('./keys');

// Twitter
var Twitter = require('twitter');

// Keys reference
var twitter = new Twitter(keys.twitter);

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

function songMe (arg3) {
    console.log('other argv is: ' + arg3);
}

function myTweets(){
    console.log("TWEETS FUNCTION FIRED!")
}
var userInput = process.argv[2];

switch(userInput){
    case 'my-tweets':
    myTweets();
      break;
    case 'spotify-this-song':
    songMe(process.argv[3])
     break;
     case 'movie-this':
     console.log("print imdb");
     break;
}

