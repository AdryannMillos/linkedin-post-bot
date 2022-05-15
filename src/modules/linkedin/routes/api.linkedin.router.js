const express = require("express");
const router = express.Router();
const linkedinController = require("../controllers/linkedinController");

router.post("/simple", linkedinController.post);

module.exports = router;
