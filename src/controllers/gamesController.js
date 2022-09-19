const Games = require("../models/games.js");

module.exports = {
  async store(req, res) {
    try {
      const listgames = await Games.find();
      return await res.status(200).json(listgames);
    } catch (error) {
      return await res
        .status(400)
        .json({ Message: `Um erro inesperado ocorreu ${error}` });
    }
  },

  async create(req, res) {
    const { title, value, price, cotas, status } = req.body;

    const Game = await Games.create({
      title,
      value,
      price,
      cotas,
      status,
    });

    return res.status(201).json(Game);
  },
  
  
};
