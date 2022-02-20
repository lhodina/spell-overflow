const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
// const { check, validationResult } = require('express-validator');
const db = require("../db/models");

const { requireAuth } = require('../auth');

router.get('/questions/new', requireAuth, csrfProtection, (req, res) => {
    res.render('new-question', { csrfToken: req.csrfToken() });
});

router.get('/questions', csrfProtection, asyncHandler(async (req, res) => {
    const questions = await db.Question.findAll();
    console.log(questions)
    res.render('all-questions', { questions, csrfToken: req.csrfToken() });
}));

router.get('/questions/:id(\\d+)', csrfProtection, asyncHandler(async (req, res) => {
    const questionId = parseInt(req.params.id)
    const specificQuestion = await db.Question.findByPk(questionId)
    const specificUser = await db.User.findAll({
        where: {
            id: specificQuestion.userId
        }
    })
    console.log(specificQuestion)
    const thisUser = specificUser[0]
    const answers = await db.Answer.findAll({
        where: {
            questionId
        }
    })
    console.log('THIS IS ANSWERS', answers)

    res.render('question', {
        specificQuestion,
        headline: specificQuestion.headline,
        content: specificQuestion.content,
        username: thisUser.username,
        answers,
        csrfToken: req.csrfToken()
    });
}));

router.post('/questions/new', requireAuth, csrfProtection, asyncHandler(async (req, res) => {
    console.log(req.body)
    const {
        headline,
        content
    } = req.body;
    const question = await db.Question.build({
        headline,
        content,
        userId: res.locals.user.id,
    });
    await question.save();
    res.redirect('/')
}));

router.get('/questions/edit/:id(\\d+)', requireAuth, csrfProtection, asyncHandler(async (req, res) => {
    const questionId = parseInt(req.params.id);
    const questionEdit = await db.Question.findByPk(questionId);

    res.render('edit-question', {
        headline: questionEdit.headline,
        content: questionEdit.content,
        questionId,
        csrfToken: req.csrfToken()
    });
}));

router.post('/questions/edit/:id(\\d+)', csrfProtection, asyncHandler(async (req, res) => {
    const questionId = parseInt(req.params.id, 10);
    const questionUpdate = await db.Question.findByPk(questionId);
    const {
        headline,
        content,
    } = req.body;
    const question = {
        headline,
        content,
    };
    await questionUpdate.update(question);
    res.redirect(`/questions/${questionId}`);
}));

router.get('/questions/delete/:id', requireAuth, csrfProtection, asyncHandler(async (req, res) => {
    const questionId = parseInt(req.params.id);
    const questionDelete = await db.Question.findByPk(questionId);
    res.render('delete-question', {
        headline: questionDelete.headline,
        content: questionDelete.content,
        questionId,
        csrfToken: req.csrfToken()
    });
}));

router.post('/questions/delete/:id(\\d+)', csrfProtection, asyncHandler(async (req, res) => {
    const questionId = parseInt(req.params.id, 10);
    const answers = await db.Answer.findAll({
        where: {
            questionId
        }
    });
    const question = await db.Question.findByPk(questionId);

    if (answers.length > 0) {
        for (let i = 0; i < answers.length; i++) {
            let answer = answers[i];
            answer.destroy();
        }
    }
    await question.destroy();
    res.redirect('/questions');
}));

// ******************
router.delete('/questions/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
    const questionId = parseInt(req.params.id, 10);
    const question = await db.Question.findByPk(questionId);
    await question.destroy();

    res.json({ message: 'Success' })
}));

router.delete('/questions/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
    const questionId = parseInt(req.params.id, 10);
    const question = await db.Question.findByPk(questionId);
    await question.destroy();
    res.redirect(`/questions`);

    res.json({ message: 'Success' })
}));

module.exports = router;
