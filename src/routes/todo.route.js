const express = require("express");
const routes = express.Router();
//const { getAllTodo } = require("../controllers/todo.controller");
const TodoController = require("../controllers/todo.controller");

routes.get("/todo", TodoController.getAllTodo);
routes.post("/todo", TodoController.createTodo);

module.exports = routes;
