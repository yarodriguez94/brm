const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../database/db.js");

const users = sequelize.define("loginUsers", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },

  firstname: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },

  lastname: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },

  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  rol: {
    type: DataTypes.ENUM("admin", "customer"),
    allowNull: false,
  },
  phone: {
    type: DataTypes.INTEGER(10),
    allowNull: false,
  },
});

module.exports = {
  users,
};
