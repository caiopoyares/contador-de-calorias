require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");

class App {
  constructor() {
    this.express = express();
    this.isDev = process.env.NODE_ENV !== "production";

    this.middlewares();
    this.views();
    this.routes();
  }

  middlewares() {
    this.express.use(cors());
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: false }));
    this.express.use(helmet());
    this.express.use(morgan("tiny"));
    this.express.use(cookieParser());
  }

  views() {
    this.express.use(
      express.static(path.resolve(__dirname, "client", "build"))
    );
  }

  routes() {
    this.express.use(require("./routes.js"));
  }
}

module.exports = new App().express;
