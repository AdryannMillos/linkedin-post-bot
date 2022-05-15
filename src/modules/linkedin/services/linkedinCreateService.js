"use strict";
const linkedinRepository = require("../repositories/linkedinRepository");

async function create(text, postDate) {
  const linkedinPost = {
    text: text,
    postDate: postDate,
  };

  await linkedinRepository.create(linkedinPost);
}

module.exports = {
  create,
};