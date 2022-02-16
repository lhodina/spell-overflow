// var express = require('express');
// var router = express.Router();
const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
//const { check, validationResult } = require('express-validator');
const db = require("../db/models");
const { User, Question } = db;
//const { requireAuth } = require('../auth');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'a/A Express Skeleton Home' });
// });

router.get('/', csrfProtection, asyncHandler(async (req, res) => {
  const questions = await Question.findAll();
  let userId = 0;
  if (req.session.user) {
      userId = req.session.user.userId;
  }
  res.render('index', { questions, userId, csrfToken: req.csrfToken() });
}));

module.exports = router;
