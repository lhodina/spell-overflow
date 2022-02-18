const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const { check, validationResult } = require('express-validator');
const db = require("../db/models");
const { User, Question, Answer } = db;
const { requireAuth } = require('../auth');

// may or may not need below:
// const authCheck = (req, res, next) => {
//     if (req.session.user) {
//         next();
//     } else {
//         res.redirect('/users/login');
//     };
// };

// there should be a router to load up /questions

router.get('/questions/:id', requireAuth, csrfProtection, asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id)
    //console.log('THIS IS QUESTIONNID', questionId)
    //console.log('THIS IS REQPARAMS', req.params)
    //console.log('THIS IS REQPARAMSID', req.params.id)


    // console.log('before answers')
    const answers = await db.Answer.findAll({
        where: {
            questionId: id
        }
    });
    // console.log('THIS IS ANSWERSSSSS', answers)

    const specificQuestion = await db.Question.findByPk(id);
    // console.log('THIS IS QUESTIONSSSSS', specificQuestion)



    res.render('question', {
        headline: specificQuestion.headline,
        content: specificQuestion.content,
        answers,
        csrfToken: req.csrfToken()
    });
}));

router.get('/questions/new', requireAuth, csrfProtection, (req, res) => {
    res.render('new-question', { csrfToken: req.csrfToken() });
});

router.post('/questions/new', csrfProtection, asyncHandler(async (req, res) => {
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
    //testQuestion.content = Question.content;
    await question.save();
    res.redirect('/')
}));

//want correct prefilled text here
router.get('/questions/edit/:id', requireAuth, csrfProtection, asyncHandler(async (req, res) => {
    const questionId = parseInt(req.params.id);
    // console.log('THIS IS questionHEADLINE', (req.params.dataValues.headline))
    //console.log('THIS IS QUESTIONID', questionId)
    const question = await db.Question.findByPk(questionId);
    //console.log("THIS IS QUESTION", question)
    res.render('edit-question', {
        headline: question.headline,
        content: question.content,
        csrfToken: req.csrfToken()
    });
}));

router.post('/questions/edit/:id', csrfProtection, asyncHandler(async (req, res) => {
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

router.get('/questions/delete/:id', csrfProtection, asyncHandler(async (req, res) => {
    const questionId = parseInt(req.params.id, 10);
    const question = await db.Question.findByPk(questionId);
    res.render('delete-question', {
        headline: '',
        content: '',
        csrfToken: req.csrfToken(),
    })
}));

router.post('/questions/delete/:id', csrfProtection, asyncHandler(async (req, res) => {
    const questionId = parseInt(req.params.id, 10);
    const question = await db.Question.findByPk(questionId);
    await question.destroy();
    res.redirect('/questions');
}));

module.exports = router;
