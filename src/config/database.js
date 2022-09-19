const mongoose = require("mongoose");

mongoose.connect('mongodb://0.0.0.0:27017/BolaoCorujaoDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let db = mongoose.connection;

module.exports = db;