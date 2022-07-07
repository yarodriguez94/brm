const express = require("express");
// const { sequelize } = require('../database/db');

const router = require("../routes/users.routes");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use("", router);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`running app in ${this.port}`);
    });
  }
}

module.exports = Server;
