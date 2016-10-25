// Serving some HTML realness
// * Create a website with 4 routes:
//   * Home
//   * Favorite Food
//   * Favorite Movies
//   * Favorite CSS Frameworks
// * Use fs to serve the HTML from files rather than straight in the JavaScript

// Requiring dependencies
var http = require('http');
var fs = require('fs');

// Set our port to 80
var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res){

	var url_parts = url.parse(req.url);

	switch (url_parts.pathname) {
    case '/':
      display_root(url_parts.pathname, req, res);
      break;
    case '/food':
      display_food(url_parts.pathname, req, res);
      break;
    case '/movies':
      display_movies(url_parts.pathname, req, res);
      break;
    case '/frameworks':
    	display_frameworks(url_parts.pathname, req, res);
      break;
    default:
      display_404(url_parts.pathname, req, res);
  }
};

function display_root(url, req, res) {
	fs.readFile("index.html", function(err, data){
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end(data);
	});
  
  res.writeHead(200, {'Content-Type': 'text/html'});

  res.end(myHTML);
}

function display_food(url, req, res) {
	fs.readFile("food.html", function(err, data){
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end(data);
	});
  
  res.writeHead(200, {'Content-Type': 'text/html'});

  res.end(myHTML);
}

function display_movies(url, req, res) {
	fs.readFile("movies.html", function(err, data){
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end(data);
	});
  
  res.writeHead(200, {'Content-Type': 'text/html'});

  res.end(myHTML);
}

function display_frameworks(url, req, res) {
	fs.readFile("frameworks.html", function(err, data){
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end(data);
	});
  
  res.writeHead(200, {'Content-Type': 'text/html'});

  res.end(myHTML);
}

// Starts our server.
server.listen(PORT, function(){
	console.log("Server is listening on PORT: " + PORT);
});


