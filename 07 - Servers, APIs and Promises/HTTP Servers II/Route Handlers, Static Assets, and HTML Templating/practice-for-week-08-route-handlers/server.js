const http = require('http');

let nextDogId = 1;

function getNewDogId() {
  const newDogId = nextDogId;
  nextDogId++;
  return newDogId;
}

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  let reqBody = '';
  req.on('data', (data) => {
    reqBody += data;
  });

  // When the request is finished processing the entire body
  req.on('end', () => {
    // Parsing the body of the request
    if (reqBody) {
      req.body = reqBody
        .split('&')
        .map((keyValuePair) => keyValuePair.split('='))
        .map(([key, value]) => [key, value.replace(/\+/g, ' ')])
        .map(([key, value]) => [key, decodeURIComponent(value)])
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
      console.log(req.body);
    }
    // Do not edit above this line

    // define route handlers here
    if (req.method === 'GET' && req.url === '/') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      return res.end('Dog Club');
    }

    if (req.method === 'GET' && req.url === '/dogs') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      return res.end('Dogs index');
    }

    // Bonus endpoints
    // GET /dogs/new
    if (req.method === 'GET' && req.url === '/dogs/new') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      return res.end('Dog create form page');
    }

    // GET /dogs/:dogId
    if (
      req.method === 'GET' &&
      req.url.startsWith('/dogs') &&
      req.url.split('/').length === 3 &&
      req.url.split('/')[1] === 'dogs' &&
      !isNaN(req.url.split('/')[2])
    ) {
      const parts = req.url.split('/');
      const dogId = parts[2];
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      return res.end(`Dog details for dogId: ${dogId}`);
    }

    // GET /dogs/:dogId/edit
    if (
      req.method === 'GET' &&
      req.url.split('/').length === 4 &&
      req.url.split('/')[1] === 'dogs' &&
      !isNaN(req.url.split('/')[2]) &&
      req.url.split('/')[3] === 'edit'
    ) {
      const dogId = req.url.split('/')[2];
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      return res.end(`Dog edit form page for dogId: ${dogId}`);
    }

    // POST /dogs
    if (req.method === 'POST' && req.url === '/dogs') {
      res.statusCode = 302;
      res.setHeader('Location', `/dogs/${getNewDogId()}`);
      return res.end();
    }

    // POST /dogs/:dogId
    if (
      req.method === 'POST' &&
      req.url.split('/').length === 3 &&
      req.url.split('/')[1] === 'dogs' &&
      !isNaN(req.url.split('/')[2])
    ) {
      const dogId = req.url.split('/')[2];
      res.statusCode = 302;
      res.setHeader('Location', `/dogs/${dogId}`);
      return res.end();
    }

    // Do not edit below this line
    // Return a 404 response when there is no matching route handler
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    return res.end('No matching route handler found for this endpoint');
  });
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));
