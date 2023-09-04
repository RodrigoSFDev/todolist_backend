const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const { MONGO_URL } = process.env;

const connectToDb = () => {
  mongoose.connect(
    MONGO_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  ).then(() => {
    console.log("Conectado ao banco de dados com sucesso!");
  }).catch((err) => {
    console.error("Erro ao conectar ao banco de dados: ", err);
  });
};

module.exports = connectToDb;
