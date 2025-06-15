const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json('get colors');
});

router.get('/:name', (req, res) => {
  const { name } = req.params;
  res.json(name);
});

module.exports = router;
