const express = require('express');
const gamesController = require('./controllers/gamesController');

const routes = express.Router();

routes.get("/games", gamesController.store);
routes.post("/newGame", gamesController.create)

module.exports = routes;