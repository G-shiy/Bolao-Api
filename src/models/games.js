const mongoose = require("mongoose");
const { v1: uuid } = require("uuid");

const gamesSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
    default: uuid,
  },
  title: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  cotas: {
    type: Number,
    required: true,
  },
  numerosDoJogo:{
    type: String,

  },

  // cria uma relação many to many em jogadores
  // para salvar os jogadores que estão participando

  jogadores: [
    {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
  ],
  
  available: {
    type: Boolean,
    default: false,
    required: true,
  },
  //Define se o jogo está Disponível ou já foi finalizado para o resultado
  created_at: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const games = mongoose.model("games", gamesSchema);

module.exports = games;
