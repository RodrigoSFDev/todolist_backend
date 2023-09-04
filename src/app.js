const express = require('express');
const { task } = require('./routes');
const connectToDb = require('./database/db');
const app = express();

app.use(express.json());
connectToDb();

app.use('/task', task);
module.exports = app;