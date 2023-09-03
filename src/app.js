const express = require('express');
const app = express();

app.get('/', (_request, response) => {
  response.send("Boas vindas ao meu app!");
});

module.exports = app;