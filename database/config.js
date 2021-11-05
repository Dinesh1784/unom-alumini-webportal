const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("unom-alumini", "root", "dinesh1784", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
