const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose.connect(
    "mongodb+srv://root:123abc@todolist.28a8kyh.mongodb.net/?retryWrites=true&w=majority",
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
