const db = require("../models/db");
module.exports.renderRegister = (req, res) => {
  res.send("<h1>This is register page</h1>");
};

module.exports.renderLogin = (req, res) => {
  res.send("<h1>This is login page</h1>");
};

module.exports.login = (req, res) => {
  console.log("Hello world from login");
};
