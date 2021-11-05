const { DataTypes } = require("sequelize");
const sequelize = require("../database/config");
const User = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  reg_no: {
    type: DataTypes.INTEGER,
  },
  username: {
    type: DataTypes.STRING,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  dob: {
    type: DataTypes.STRING,
  },
  course: {
    type: DataTypes.STRING,
  },
  passedout_year: {
    type: DataTypes.INTEGER,
  },
  phone: {
    type: DataTypes.INTEGER,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
  },
});

module.exports = User;
