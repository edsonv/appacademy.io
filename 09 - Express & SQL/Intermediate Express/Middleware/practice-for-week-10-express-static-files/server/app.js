const path = require('path');
const express = require('express');
const app = express();
// Your code here
// app.use('/', express.static(path.join(__dirname, 'assets')));
app.use('/', express.static(path.join(__dirname, 'assets/scripts')));
app.use('/stylesheets', express.static(path.join(__dirname, 'assets/css')));
app.use('/stickers', express.static(path.join(__dirname, 'assets/images')));

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
