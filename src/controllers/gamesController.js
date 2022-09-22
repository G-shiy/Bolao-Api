const Games = require("../models/games.js");
const User = require("../models/participants");

module.exports = {
  //retorna todos os jogos disponíveis
  async storeAvailable(req, res) {
    try {
      const listgames = await Games.find({"available": true});
      return await res.status(200).json(listgames);
    } catch (error) {
      return await res
        .status(400)
        .json({ Message: `Um erro inesperado ocorreu ${error}` });
    }
  },
  //retorna todos os jogos indisponíveis

  async storeUnavailable(req, res) {
    try {
      const listgames = await Games.find({"available": false});
      return await res.status(200).json(listgames);
    } catch (error) {
      return await res
        .status(400)
        .json({ Message: `Um erro inesperado ocorreu ${error}` });
    }
  },

  
  async create(req, res) {
    const { title, value, price, cotas, available } = req.body;

    if(!title) return res.status(400).json({erro: "Necessita de um titulo"})
    if(!value) return res.status(400).json({erro: "Necessita de um valor"})
    if(!price) return res.status(400).json({erro: "Necessita de um preço"})
    if(!cotas) return res.status(400).json({erro: "Necessita das cotas"})

    const Game = await Games.create({
      title,
      value,
      price,
      cotas,
      available,
    });

    return res.status(201).json(Game);
  },
  
  async updateUserGames(req, res){
    try{
      const { name, email, phone, participants} = req.body;
      
      const Game = await Games.findByIdAndUpdate(req.params.gameId, {
        name,
        email,
        phone
      }) 

      await Promise.all(participants.map(async participante =>{
        const participanteDoJogo = new User({...participants, game: Game._id});

        await participanteDoJogo.save();

        Game.participants.push(participanteDoJogo)
      }))

    }catch(e){
      console.log(e)
      res.status(400).send({"erro": "algo deu errado"})
    }
  }

};
