const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // Your code here
  const { method, url } = req;

  console.log(method, url);

  const htmlPage = fs.readFileSync('./index.html', 'utf-8');
  if (method === 'GET' && url.startsWith('/static')) {
    let parts = url.split('/');
    let file;
    let contentType = '';

    if (parts[2] === 'images') {
      file = fs.readFileSync(`./assets/images/${parts[3]}`);
      contentType = 'image/jpeg';
    } else if (parts[2] === 'css') {
      file = fs.readFileSync(`./assets/css/${parts[3]}`, 'utf-8');
      contentType = 'text/css';
    }

    res.setHeader('Content-Type', contentType);
    return res.end(file);
  }

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(htmlPage);
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));
