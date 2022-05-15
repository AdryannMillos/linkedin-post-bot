"use strict";
const linkedinRepository = require("../repositories/linkedinRepository");

async function show() {
  const currentDate = new Date().toISOString().split("T")[0];

  const scheduledForToday = await linkedinRepository.findAll(currentDate);

  const scheduledForNow = scheduledForToday.filter(
    (item) => item.postHour == new Date().getHours()
  );

  return scheduledForNow;
}

module.exports = {
  show,
};
