const express = require("express");
const routes = require("./routes");
const db = require("./config/database");
require("dotenv").config();

db.on("error", console.log.bind(console, "erro de conexão"));
db.once("open", () => {
  console.log("conexão com o banco feita com sucesso");
});

const app = express();

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT, () => {
  console.log("ouvindo na porta " + String(process.env.PORT));
});
