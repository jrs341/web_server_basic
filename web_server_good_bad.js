// * Using the previous example as a guide, create an app that has two web servers.
// * One that listens on port 7000 and one that listens on port 7500.
// * The one listening on port 7000 will always tell the user something good about themselves.
// * The one listening on 7500 will always tell the user something bad about themselves.
// * Make sure you create a Github repo and commit this code!

// ** Bonus **
// * Generate the good / bad phrase randomly from a list of predefined phrases
// * Use the `twitter` package inside the response to also return a random tweet!

var http = require('http');

//Lets define a port we want to listen to
var PORTgood = 7000;

var PORTbad = 7500;

//We need a function which handles requests and send response
function handleRequestGood(request, response){
    response.end('Good stuff about you hit');
}

function handleRequestBad(request, response){
	response.end('Bad stuff about you hit');
}

//Create a server
var serverGood = http.createServer(handleRequestGood);

var serverBad = http.createServer(handleRequestBad);

//Lets start our server
server.listen(PORTgood, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log('something good about youself from', PORTgood);
});

server.listen(PORTbad, function(){
	console.log('something bad about yourself from', PORTbad);
})

