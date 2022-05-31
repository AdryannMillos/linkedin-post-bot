const bodyParser = require("body-parser");
const express = require("express");
const schedule = require("node-schedule");
const scheduledPost = require("./modules/linkedin/services/linkedinPostScheduleTextPost");
require("dotenv").config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  "/api/v1/linkedin/post",
  require("./modules/linkedin/routes/api.linkedin.router")
);

schedule.scheduleJob("00 * * * * *", async () => {
  console.log("Running");
  console.log(new Date().getHours());
  await scheduledPost.schedulePost();
  console.log("Finished");
});

module.exports = app;
