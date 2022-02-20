const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const { check, validationResult } = require('express-validator');
const db = require("../db/models");
const { User, Question, Answer } = db;
const { requireAuth } = require('../auth');

router.get('/questions/:id(\\d+)/answers/new', requireAuth, csrfProtection, asyncHandler(async (req, res) => {
    const questionId = parseInt(req.params.id);
    const question = await db.Question.findByPk(questionId);
    res.render('new-answer', {
        questionId,
        question,
        csrfToken: req.csrfToken(),
    });
}));

router.post('/questions/:id(\\d+)/answers/new', csrfProtection, requireAuth, asyncHandler(async (req, res) => {
    const questionId = parseInt(req.params.id, 10);
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
router.get('/answers/edit/:id(\\d+)', requireAuth, csrfProtection, asyncHandler(async (req, res) => {
    const answerId = parseInt(req.params.id)
    const answer = await db.Answer.findByPk(answerId)
    const questionId = answer.questionId
    const question = await db.Question.findByPk(questionId)

    // console.log("--------------------", answer);

    res.render('edit-answer', {
        question,
        answerId,
        answer,
        content: answer.content,
        csrfToken: req.csrfToken()
    });
}));

// it's returning invalid csrf token with csrfProtection
router.post('/answers/edit/:id(\\d+)', asyncHandler(async (req, res) => {
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

router.get('/answers/delete/:id(\\d+)', requireAuth, csrfProtection, asyncHandler(async (req, res) => {
    const answerId = parseInt(req.params.id, 10);
    const answer = await db.Answer.findByPk(answerId);
    res.render('delete-answer', {
        answerId,
        content: answer.content,
        csrfToken: req.csrfToken()
    });
}));

router.post('/answers/delete/:id(\\d+)', requireAuth, csrfProtection, asyncHandler(async (req, res) => {
    const answerId = parseInt(req.params.id, 10);
    const answer = await db.Answer.findByPk(answerId);
    const questionId = answer.questionId
    await answer.destroy();
    res.redirect(`/questions/${questionId}`);
}));

router.delete('/answers/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
    const answerId = parseInt(req.params.id, 10);
    const answer = await db.Answer.findByPk(answerId);
    await answer.destroy();

    res.json({message: 'Success'})
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
