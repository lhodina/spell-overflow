
const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const { check, validationResult } = require('express-validator');
const db = require("../db/models");
const { User, Question, Answer } = db;
const { requireAuth } = require('../auth');


router.get('/:id/answers/new', requireAuth, csrfProtection, asyncHandler(async (req, res) => {
    const questionId = parseInt(req.params.id);
    // console.log('ANSWERS REQPARAMS', req.params)
    // console.log('ANSWERS REQPARAMSIDDDDDD', req.params.id)
    const question = await db.Question.findByPk(questionId);
    //console.log(question)
    res.render('new-answer', {
        questionId,
        csrfToken: req.csrfToken(),
    });
}));


router.post('/:id/answers/new', csrfProtection, requireAuth, asyncHandler(async (req, res) => {
    // console.log("INSIDE POST ANSWER ROUTE", (req.body))
    //  const questionId = parseInt(req.params.id);
    // const question = await db.Question.findByPk(questionId);
    // console.log(question)
    // console.log('THIS IS QUESTIONID IN POST ROUTE', questionId)
    const {
        content,
    } = req.body;
    // console.log("NEW REQ BODY", req.body)
    const answer = await db.Answer.build({
        content,
        picture: '',
        userId: res.locals.user.id,
        questionId: parseInt(req.params.id),
    });
    //testQuestion.content = Question.content;
    await answer.save();
    res.redirect('/')
}));


router.get('/answers/edit/:id', requireAuth, csrfProtection, asyncHandler(async (req, res) => {
    const answerId = parseInt(req.params.id)
    const answer = await db.Answer.findByPk(answerId)

    console.log(answer);

    res.render('edit-answer', {
        content: answer.content,
        csrfToken: req.csrfToken()
    })
}))



/*
ROUTES:
GET /answers/new
    POST /answers
    GET /questions/:id

GET /answers/:id/edit
    POST /answers
    GET /questions/:id


//- ANSWER MODEL:
//- id
//- content
//- picture
//- userId
//- questionId


QUESTIONS AND REVIEW:

*/


module.exports = router;
