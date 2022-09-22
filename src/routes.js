const express = require('express');
const gamesController = require('./controllers/gamesController');

const routes = express.Router();

// Retorna todos os jogos disponíveis do bolão
routes.get("/games", gamesController.store);
// Retorna todos os jogos finalizados do bolão

// Publica um novo jogo no bolão
routes.post("/newGame", gamesController.create)

// Deleta um jogo

// Loga no SuperUsuário;


module.exports = routes;