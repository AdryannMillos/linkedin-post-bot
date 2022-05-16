
"use strict";
const linkedinPostService = require("./linkedinPostService");
const LinkedinScheduleService = require("./linkedinScheduleService")

async function schedulePost() {

 const scheduled = await LinkedinScheduleService.show();

 return scheduled.map(async (item)=> await linkedinPostService.linkedinPost(item.text));

}

module.exports = {
    schedulePost,
};
