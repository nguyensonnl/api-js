const TodoModel = require("../models/todo.model");

const TodoService = {};

TodoService.getAllTodo = async () => {
  return await TodoModel.find({});
};

TodoService.creatTodo = async (data) => {
  return await TodoModel.create({ name: data.name });
};

module.exports = TodoService;
