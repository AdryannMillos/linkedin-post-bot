"use strict";
const linkedinRepository = require("../repositories/linkedinRepository");

async function create(text, postDate, postHour) {
  const linkedinPost = {
    text: text,
    postDate: postDate,
    postHour: postHour
  };

  await linkedinRepository.create(linkedinPost);
}

module.exports = {
  create,
};
