// Create web server
// 1. Load the http module
var http = require('http');

// 2. Create a web server
http.createServer(function (req, res) {
  // 3. Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // 4. Send the response body "Hello World"
  res.end('Hello World\n');
}).listen(8080);

console.log('Server running on port 8080.');

// 5. Open the browser and type http://localhost:8080 at the address bar
// 6. You should see the text "Hello World" on the browser
// 7. To stop the server, press Ctrl+C