'use strict';
const puppeteer = require("puppeteer");
const  { setTimeout } = require('timers/promises');
require("dotenv").config();

async function linkedinPost(text) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://www.linkedin.com/uas/login?fromSignIn=true&trk=cold_join_sign_in');

  await page.waitForSelector('#username');
  await page.waitForSelector('#password');
  await page.waitForSelector('.btn__primary--large');


  await page.type('#username', process.env.LINKEDIN_USER);
  await page.type('#password', process.env.LINKEDIN_PWD);
  await page.click('.btn__primary--large');
  

  await page.waitForSelector('button.artdeco-button.artdeco-button--muted.artdeco-button--4.artdeco-button--tertiary.ember-view.share-box-feed-entry__trigger');

  await page.click('button.artdeco-button.artdeco-button--muted.artdeco-button--4.artdeco-button--tertiary.ember-view.share-box-feed-entry__trigger');


  await page.waitForSelector('div.ql-editor.ql-blank');
  await page.waitForSelector('div.share-box_actions');

  await page.type('div.ql-editor.ql-blank', text);

  await setTimeout(2000);

  // await page.click('.share-actions__primary-action.artdeco-button');

  await browser.close();
};

module.exports = {
    linkedinPost
  };