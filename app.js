const express = require("express");
const app = express();
const sequelize = require("./config/bd");
const exphbs = require("express-handlebars");
const Estudante = require("./models/Estudante");

app.engine("handlebars", exphbs.engine({ defaultLayout: false }));
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.send("Testando o express!");
});

app.listen(3000, () => console.log(`Servidor em execução`));

async function conectarBD() {
  try {
    await sequelize.sync();
    console.log("Conexão com o banco de dados estabelecida com sucesso!");
  } catch (erro) {
    console.error("Erro ao conectar:", erro);
  }
}

conectarBD();
