const http = require('http');
const fs = require('fs');

const dogs = [
  {
    dogId: 1,
    name: 'Fido',
    age: 2,
  },
  {
    dogId: 2,
    name: 'Fluffy',
    age: 10,
  },
];

let nextDogId = 3;

function getNewDogId() {
  const newDogId = nextDogId;
  nextDogId++;
  return newDogId;
}

function getContentType(fileName) {
  const ext = fileName.split('.')[1];
  switch (ext) {
    case 'jpg':
    case 'jpeg':
      return 'image/jpeg';
    case 'png':
      return 'image/png';
    case 'css':
      return 'text/css';
    default:
      return 'text/plain';
  }
}

function Error(res) {
  const htmlPage = fs
    .readFileSync('./views/error.html', 'utf-8')
    .replace(/#{message}/g, 'Dog Not Found');
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/html');
  return res.end(htmlPage);
}

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);
  if (req.method === 'GET' && req.url.startsWith('/assets')) {
    const assetPath = req.url.split('/assets')[1];
    try {
      const resBody = fs.readFileSync('./assets' + assetPath);
      res.statusCode = 200;
      res.setHeader('Content-Type', getContentType(assetPath));
      res.write(resBody);
      return res.end();
    } catch {
      console.error('Cannot find asset', assetPath, 'in assets folder');
    }
  }

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

    // route handlers
    // GET /
    if (req.method === 'GET' && req.url === '/') {
      const htmlPage = fs.readFileSync('./views/index.html', 'utf-8');
      const resBody = htmlPage;

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.write(resBody);
      return res.end();
    }

    // Phase 1: GET /dogs
    if (req.method === 'GET' && req.url === '/dogs') {
      // Your code here
      const dogsItems = [...dogs].map((dog) => `<li>${dog.name}</li>`).join('');
      const htmlPage = fs
        .readFileSync('./views/dogs.html', 'utf-8')
        .replace(/#{dogsList}/g, dogsItems);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      return res.end(htmlPage);
    }

    // Phase 2: GET /dogs/new
    if (req.method === 'GET' && req.url === '/dogs/new') {
      // Your code
      const htmlPage = fs.readFileSync('./views/create-dog.html', 'utf-8');
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      return res.end(htmlPage);
    }

    // Phase 3: GET /dogs/:dogId
    if (req.method === 'GET' && req.url.startsWith('/dogs/')) {
      const urlParts = req.url.split('/');
      if (urlParts.length === 3) {
        const dogId = urlParts[2];
        const dog = dogs.find((dog) => dog.dogId === Number(dogId));
        // Your code here
        if (!dog) {
          return Error(res);
        }
        const htmlPage = fs
          .readFileSync('./views/dog-details.html', 'utf-8')
          .replace(/#{name}/g, dog.name)
          .replace(/#{age}/g, dog.age);

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        return res.end(htmlPage);
      }
    }

    // Phase 4: POST /dogs
    if (req.method === 'POST' && req.url === '/dogs') {
      // Your code here
      const { name, age } = req.body;
      const newDog = {
        ...req.body,
        dogId: getNewDogId(),
        name,
        age: Number(age),
      };
      dogs.push(newDog);
      res.statusCode = 301;
      res.setHeader('Location', `/dogs/${newDog.dogId}`);
      return res.end();
    }

    // Phase 5: GET /dogs/:dogId/edit
    if (req.method === 'GET' && req.url.startsWith('/dogs/')) {
      const urlParts = req.url.split('/');
      if (urlParts.length === 4 && urlParts[3] === 'edit') {
        const dogId = urlParts[2];
        const dog = dogs.find((dog) => dog.dogId === Number(dogId));
        // Your code here
        if (!dog) {
          return Error(res);
        }
        const htmlPage = fs
          .readFileSync('./views/edit-dog.html', 'utf-8')
          .replace(/#{dogId}/g, dogId)
          .replace(/#{name}/g, dog.name)
          .replace(/#{age}/g, dog.age);
        res.statusCode = 201;
        return res.end(htmlPage);
      }
    }

    // Phase 6: POST /dogs/:dogId
    if (req.method === 'POST' && req.url.startsWith('/dogs/')) {
      const urlParts = req.url.split('/');
      if (urlParts.length === 3) {
        const dogId = urlParts[2];
        const dog = dogs.find((dog) => dog.dogId === Number(dogId));
        // Your code here
        if (!dog) {
          return Error(res);
        }
        const { name, age } = req.body;
        dog.name = name;
        dog.age = age;
        const htmlPage = fs
          .readFileSync('./views/dog-details.html', 'utf-8')
          .replace(/#{name}/g, dog.name)
          .replace(/#{age}/g, dog.age);

        res.statusCode = 301;
        res.setHeader('Content-Type', 'text/html');
        return res.end(htmlPage);
      }
    }

    // No matching endpoint
    const htmlPage = fs.readFileSync('./views/error.html', 'utf-8');
    const resBody = htmlPage.replace(/#{message}/g, 'Page Not Found');

    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.write(resBody);
    return res.end();
  });
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));
