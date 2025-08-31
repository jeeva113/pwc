const http = require('http');
const fs = require('fs');
const path = require('path');

// Use env var from Kubernetes, fallback to 5200
const PORT = process.env.PORT || 5200;

http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'calculator.html');

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end('Server Error');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content, 'utf-8');
    }
  });
}).listen(PORT, "0.0.0.0", () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
});
