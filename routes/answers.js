
const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const { check, validationResult } = require('express-validator');
const db = require("../db/models");
const { User, Question, Answer } = db;
const { requireAuth } = require('../auth');


router.get('/answers/new', requireAuth, csrfProtection, asyncHandler(async (req, res) => {
    res.render('new-answer', {
        csrfToken: req.csrfToken(),
    });
}));



router.post('/answers/new', csrfProtection, requireAuth, asyncHandler(async (req, res) => {
    const questionId = parseInt(req.params.id);
    // const question = await db.Question.findByPk(questionId);

    // const answers = await db.Question.findAll({include: ["Answers"]});
    
    const {
        content,
        picture,
        userId
    } = req.body;

    const answer = await db.Answer.create({
        content,
        picture,
        userId,
        questionId: res.locals.question.id
    });


    console.log("ANSWER.QUESTIONID:", answer.questionId)

    res.redirect('/');
}));



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
