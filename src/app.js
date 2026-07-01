const express = require("express");
const cookieParser = require("cookie-parser");

const errorHandler = require("./middlewares/error.middleware.js");
const notFound = require("./middlewares/notFound.middleware.js");

const app = express();

app.use(express.json());
app.use(cookieParser());

const routes = require("./routes");
app.use("/api", routes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;