const express = require('express');
const {getAll, getById, create} = require('../controller/Task.Controller');

const route = express.Router();

route.get('/', getAll);
route.get('/:id', getById);
route.post('/', create);

module.exports = route;