const express = require("express");
const routes = require("./routes/index.js");
const app = express();

app.use(routes);
app.use(express.json());

module.exports = app;