const express = require('express');
const CifraController = require('./controllers/CifraController');

const routes = express.Router();

//get cifras
routes.get('/cifras', CifraController.index);

//salvar cifras
routes.post('/cifras', CifraController.store);

module.exports = routes;