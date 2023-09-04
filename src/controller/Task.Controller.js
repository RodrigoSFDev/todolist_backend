const {getAllTask, getTaskById, createTask} = require('../service/Task.Service');

const getAll = async (req, res) => {
  const tasks = await getAllTask();
  return res.status(200).json(tasks);
} 

const getById = async (req, res) => {
  const { id } = req.params;
  const task = await getTaskById(id);
  return res.status(200).json(task);
}

const create = async (req, res) => {
  const { description, completed } = req.body;
  console.log(description, completed);
  const task = await createTask(description, completed);
  return res.status(201).json(task);
}

module.exports = {
  getAll,
  getById,
  create,
};