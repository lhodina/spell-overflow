// var express = require('express');
// var router = express.Router();
const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
//const { check, validationResult } = require('express-validator');
const db = require("../db/models");
const answer = require('../db/models/answer');
const { User, Question, Answer } = db;
//const { requireAuth } = require('../auth');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'a/A Express Skeleton Home' });
// });

router.get('/', csrfProtection, asyncHandler(async (req, res) => {
  const questions = await Question.findAll();
  const answers = await Answer.findAll();
  //const array = Object.values(answers)
  questionIdArray = []
  answerIdArray = []
  const eachQuestion = (array) => {
    array.forEach(q => questionIdArray.push(q.id))
    return questionIdArray
  }

  const eachAnswer = (array) => {
    array.forEach(a => answerIdArray.push(a.questionId))
    return answerIdArray
  }
  const allAnswerIds = eachAnswer(Object.values(answers))
  const allQuestionIds = eachQuestion(Object.values(questions))

  const countAnswers =
    countObj = {}
  allAnswerIds.forEach(a => {
    if (allQuestionIds.includes(a)) {
      countObj[a] = countObj[a] ? countObj[a] + 1 : 1;
    } 
    return countObj
  })


  let userId = 0;
  if (req.session.user) {
    userId = req.session.user.userId;
  }
  res.render('index', { questions, countAnswers, userId, csrfToken: req.csrfToken() });

}));


router.get('/*', csrfProtection, asyncHandler(async (req, res) => { 
  res.render('notfound')
}))

module.exports = router;
