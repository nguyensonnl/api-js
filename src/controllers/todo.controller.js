const TodoService = require("../services/todo.service");
const TodoController = {};

TodoController.getAllTodo = async (req, res) => {
  try {
    const todos = await TodoService.getAllTodo();
    res.status(200).json({
      todos,
    });
  } catch (error) {
    res.status(400);
  }
};

TodoController.createTodo = async (req, res) => {
  try {
    const todo = await TodoService.creatTodo(req.body);
    res.status(200).json({
      todo,
    });
  } catch (error) {
    res.status(400);
  }
};

module.exports = TodoController;
