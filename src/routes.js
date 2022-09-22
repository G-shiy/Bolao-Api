const express = require('express');
const gamesController = require('./controllers/gamesController');

const routes = express.Router();

// Retorna todos os jogos disponíveis do bolão
routes.get("/games", gamesController.storeAvailable);
// Retorna todos os jogos finalizados do bolão
routes.get("/finished-games", gamesController.storeUnavailable);

// Publica um novo jogo no bolão
routes.post("/newGame", gamesController.create)

// Deleta um jogo

// Loga no SuperUsuário;


module.exports = routes;