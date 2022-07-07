const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("brm_db", "root", "root", {
  hots: "localhost",
  dialect: "mysql",
});

module.exports = {
  sequelize,
};
