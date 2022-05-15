const linkedinPostService = require("../services/linkedinPostService");

async function post(req, res) {
 try{
  const text = req.body.text;
  await linkedinPostService.linkedinPost(text);
  return res.status(200).json({message: "Posted"});
 }catch(err){
  return res.status(500).json({message: err.message});
 }
}

module.exports = {
  post,
};