const express = require("express");
const responseFilter = require("./middlewares/response.filter.js");
const cors = require("cors");
const routes = require("./routes/index.js");
const app = express();

app.use(cors());
app.use(routes, responseFilter);
app.use(express.json());

module.exports = app;