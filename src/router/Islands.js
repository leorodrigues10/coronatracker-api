const express = require('express');
const { getAll, create } = require('../controller/Islands');


const islandsRouter = express.Router();


islandsRouter.get('/islands', (req, res) => {
    getAll(req, res);
});

islandsRouter.post('/islands', (req, res) => {
  create(req, res);
});



module.exports = islandsRouter;