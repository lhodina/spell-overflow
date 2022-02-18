const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const { check, validationResult } = require('express-validator');
const db = require("../db/models");
const { User, Question, Answer } = db;
const { requireAuth } = require('../auth');

router.get('/questions/:id/answers/new', requireAuth, csrfProtection, asyncHandler(async (req, res) => {
    const questionId = parseInt(req.params.id);
    const question = await db.Question.findByPk(questionId);
    res.render('new-answer', {
        questionId,
        csrfToken: req.csrfToken(),
    });
}));

// something wrong with post
router.post('/questions/:id/answers/new', csrfProtection, requireAuth, asyncHandler(async (req, res) => {
    const questionId = parseInt(req.params.id);
    const {
        content,
    } = req.body;
    const answer = await db.Answer.build({
        content,
        picture: '',
        userId: res.locals.user.id,
        questionId: parseInt(req.params.id),
    });
    await answer.save();
    // made this redirect to question that answer is supposed to be under (added line 21 too)
    res.redirect(`/questions/${questionId}`)
}));

// this should target things within its own question only
router.get('/answers/edit/:id', requireAuth, csrfProtection, asyncHandler(async (req, res) => {
    const answerId = parseInt(req.params.id)
    const answer = await db.Answer.findByPk(answerId)

    // console.log("--------------------", answer);

    res.render('edit-answer', {
        answerId,
        content: answer.content,
        csrfToken: req.csrfToken()
    });
}));

// it's returning invalid csrf token with csrfProtection
router.post('/answers/edit/:id', asyncHandler(async (req, res) => {
    const answerId = parseInt(req.params.id, 10);
    const answerEdit = await db.Answer.findByPk(answerId);
    const questionId = answerEdit.questionId

    const {
        content,
    } = req.body;

    const answer = {
        content,
    };

    await answerEdit.update(answer);
    res.redirect(`/questions/${questionId}`);
}));

router.get('/answers/delete/:id', csrfProtection, asyncHandler(async (req, res) => {
    const answerId = parseInt(req.params.id, 10);
    const answer = await db.Answer.findByPk(answerId);
    res.render('delete-answer', {
        answerId,
        content: answer.content,
        csrfToken: req.csrfToken()
    });
}));

router.post('/answers/delete/:id', csrfProtection, asyncHandler(async (req, res) => {
    const answerId = parseInt(req.params.id, 10);
    const answer = await db.Answer.findByPk(answerId);
    await answer.destroy();
    res.redirect(`/questions/${answerId}`);
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
