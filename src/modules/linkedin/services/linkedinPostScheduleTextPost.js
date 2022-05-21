
"use strict";
const linkedinPostService = require("./linkedinPostTextService");
const LinkedinScheduleService = require("./linkedinScheduleService")

async function schedulePost() {

 const scheduled = await LinkedinScheduleService.show();

 return scheduled.map(async (item)=> await linkedinPostTextService.linkedinPost(item.text));

}

module.exports = {
    schedulePost,
};
