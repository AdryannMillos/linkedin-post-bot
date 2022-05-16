const bodyParser = require("body-parser");
const express = require("express");
const schedule = require("node-schedule");
const scheduledPost = require("./modules/linkedin/services/linkedinPostSchedulePost");
require("dotenv").config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  "/api/v1/linkedin/post",
  require("./modules/linkedin/routes/api.linkedin.router")
);

schedule.scheduleJob("00 * * * * *", async () => {
  console.log("i run...");
  await scheduledPost.schedulePost();
  console.log("posted");
});

module.exports = app;
