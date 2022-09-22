const mongoose = require("mongoose");
const { v1: uuid } = require("uuid");

const userSchema = mongoose.Schema({
  _id: {
    type: String,
    required: true,
    default: uuid,
  },
  email:{
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  phone:{
    type: Number,
    required: true,
  },

  games: [{
    type: mongoose.Types.ObjectId,
    ref: 'games',
  }]
  
})


const user = mongoose.model("user", userSchema);

module.exports = user;
