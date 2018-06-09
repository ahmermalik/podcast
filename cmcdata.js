var request = require('request');
var db = require('./models');

request('https://api.coinmarketcap.com/v2/ticker/?limit=10', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('data:', body); // Print the Json data response by coinmarket cap .

});