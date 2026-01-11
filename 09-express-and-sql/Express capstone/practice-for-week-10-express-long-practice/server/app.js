const express = require('express');
const path = require('path');
const app = express();
require('express-async-errors');
// require('dotenv').config();

const dogsRouter = require('./routes/dogs');
console.log(process.env.TEST_ENV);

app.use(express.json());
app.use('/static', express.static(path.join(__dirname, 'assets')));
app.use((req, res, next) => {
  res.on('finish', () => {
    const { method, url } = req;
    console.log(method, url, res.statusCode);
  });
  next();
});

// For testing purposes, GET /
app.get('/', (req, res) => {
  res.json(
    'Express server running. No content provided at root level. Please use another route.'
  );
});

// For testing express.json middleware
app.post('/test-json', (req, res, next) => {
  // send the body as JSON with a Content-Type header of "application/json"
  // finishes the response, res.end()
  res.json(req.body);
  next();
});

// For testing express-async-errors
app.get('/test-error', async (req, res) => {
  const error = new Error('Hello World!');
  error.statusCode = 404;
  throw error;
});

app.use('/dogs', dogsRouter);

app.use('/*', (req, res) => {
  const error = new Error("The requested resource couldn't be found.");
  error.statusCode = 404;
  throw error;
});

app.use((err, req, res, next) => {
  let jsonRes = {
    message: err.message || 'Something went wrong',
    statusCode: err.statusCode,
  };
  if (process.env.NODE_ENV !== 'production') {
    jsonRes.stack = err.stack;
  }
  console.log(err);
  res.statusCode = err.statusCode || 500;
  res.json(jsonRes);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Server is listening on port', port));
