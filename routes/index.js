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
  // const answers = await Answer.findAll();
  // //const array = Object.values(answers)
  // questionIdArray = []
  // answerIdArray = []
  // const eachQuestion = (array) => {
  //   array.forEach(q => questionIdArray.push(q.id))
  //   return questionIdArray
  // }
  // const eachAnswer = (array) => {
  //   array.forEach(a => answerIdArray.push(a.questionId))
  //   return answerIdArray
  // }
  // const countAnswers = (array) => {
  //   let countObj = {}
  //   array.forEach(e => {
  //     countObj[e.questionId] = countObj[e.questionId] ? countObj[e.questionId] + 1 : 1
  //   })
    
  //   return countObj
  // }
  // const correspond = () => {
  //   let countObject = countAnswers(answers)
  //   // console.log('1', Object.keys(countAnswers(answers)))
  //   Object.values(questions).forEach(q => {
  //       let x = countObject[q.id]
  //       console.log(x)
  //       return x  
  //   })
    
  // }

  // // console.log('@@@@', eachQuestion(questions))
  // // console.log('@@@@', eachAnswer(answers))
  // // console.log('@@@@', countAnswers(answers))
  // const counting = correspond()
  // //console.log(correspond())





  let userId = 0;
  if (req.session.user) {
      userId = req.session.user.userId;
  }
  res.render('index', { questions, userId, csrfToken: req.csrfToken() });
}));

module.exports = router;
