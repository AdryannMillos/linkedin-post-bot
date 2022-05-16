const linkedinPostService = require("../services/linkedinPostService");
const linkedinCreateService = require("../services/linkedinCreateService");
const linkedinScheduleService = require("../services/linkedinScheduleService");

async function post(req, res) {
  try {
    const text = req.body.text;
    await linkedinPostService.linkedinPost(text);
    return res.status(200).json({ message: "Posted" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

async function create(req, res) {
  try {
    const text = req.body.text;
    const postDate = req.body.postDate;

    await linkedinCreateService.create(text, postDate);
    return res.status(201).json({ message: "Created" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

async function index(req, res) {
  try {
    const scheduledPosts = await linkedinScheduleService.show();

    return res.status(201).json(scheduledPosts);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

module.exports = {
  post,
  create,
  index,
};
