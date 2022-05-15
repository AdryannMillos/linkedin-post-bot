const bodyParser = require("body-parser");
const express = require("express");
require("dotenv").config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/v1/linkedin/post", require("./modules/linkedin/routes/api.linkedin.router"));


module.exports = app;