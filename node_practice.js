const http = require('http');
const dt = require('./myfirstmodule')
const fs = require('fs');

http.createServer(function (req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime());
    res.write(data);
    res.end();
  });

}).listen(8080);

