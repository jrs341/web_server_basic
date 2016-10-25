var url = require('url');

var http = require('http');

var PORT = 8080;

function handleRequestGood(request, response){

	var urlParts = url.parse(request.url);

	console.log(urlParts);

    switch (urlParts) {
    	case '/':
    	showHomePage(urlParts.pathname, request, response);
    	break;
    	case '/portfolio':
    	showPortfolio(urlParts.pathname, request, response);
    	break;
    	default:
    }
}

function showHomePage(pathname, request, response) {
	var html = '<html>';
	html+= '<body><h1>Home Page</h1>';
	html+= "<a href='/portfolio>Portfolio</a>";
	html+= '</body></html>'

	response.end(html);
}

function showPortfolio(pathname, request, response) {
	var html = '<html>';
	html+= '<body><h1>Portfolio</h1>';
	html+= "<a href='/home>Home</a>";
	html+= '</body></html>'

	response.end(html);
}
}