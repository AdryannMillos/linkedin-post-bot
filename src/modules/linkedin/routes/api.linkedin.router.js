const express = require("express");
const router = express.Router();
const linkedinController = require("../controllers/linkedinController");

router.post("/simple/now", linkedinController.post);
router.post("/simple/scheduled", linkedinController.create);
router.get("/simple", linkedinController.index);



module.exports = router;
