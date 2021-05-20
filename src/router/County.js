const express = require('express');
const { getAll, create } = require('../controller/County');


const countyRouter = express.Router();

countyRouter.get('/counties', (req, res) => {
  getAll(req, res);
});

countyRouter.post('/counties', (req, res) => {
create(req, res);
});

module.exports = countyRouter;