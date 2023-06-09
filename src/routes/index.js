const express = require("express");
const routes = express.Router();

routes.use("/api/v1", require("./todo.route"));

routes.get("/", (req, res) => {
  res.json({
    message: "Welcome to my website",
  });
});
routes.get("*", (req, res) => {
  res.json({
    message: "Not found",
  });
});

module.exports = routes;
