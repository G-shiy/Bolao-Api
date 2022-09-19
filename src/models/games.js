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
  status: {
    type: String,
    default: "Disponível",
    required: true,
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const games = mongoose.model("games", gamesSchema);

module.exports = games;
