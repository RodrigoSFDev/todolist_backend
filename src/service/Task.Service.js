const Task = require("../model/Task");

const getAllTask = async () => {
  return await Task.find();
};

const getTaskById = async (id) => {
  return await Task.findById(id);
};

const createTask = async (description, completed) => {
  return await Task.create({ description, completed });
}

module.exports = {
  getAllTask,
  getTaskById,
  createTask,
};