var http = request("http");

http.createServer(function (request, response) {
    // send the HTTP header
    // HTTP Status: 200 : ok
    // Content Type: text/plain
    response.writeHeader(200, {'Content-Type': 'text/plain'});
    
    //send the responce body as "Hello World"
    response.end('Hello world...Welcome to NODE Environment\n');
}).listen(8090);

// Console will print the message
console.log('Server running at http://127.0.0.1:8090/');
