const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const { check, validationResult } = require('express-validator');
const db = require("../db/models");
const { User, Question } = db;
const { requireAuth } = require('../auth');

// may or may not need below:
// const authCheck = (req, res, next) => {
//     if (req.session.user) {
//         next();
//     } else {
//         res.redirect('/users/login');
//     };
// };

// router.get('/questions/new', requireAuth, csrfProtection, (req, res) => {
//     console.log('INSIDE /QUESTIONS/NEW GET ROUTER')
//     res.render('new-question', { csrfToken: req.csrfToken() });
// });

router.get('/questions/:id(\\d+)',  csrfProtection, asyncHandler(async (req, res) => {
    const questionId = parseInt(req.params.id)
    console.log('THIS IS QUESTIONNID', questionId)
    console.log('THIS IS REQPARAMS', req.params)
    console.log('THIS IS REQPARAMSID', req.params.id)

    // const attractionId = parseInt(req.params.id, 10);
    const specificQuestion = await db.Question.findByPk(questionId);
    // console.log('THIS IS SPECIFIC QUESTION', specificQuestion)

    res.render('question', {
        headline: specificQuestion.headline,
        content: specificQuestion.content,
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
    //testQuestion.content = Question.content;
    await question.save();
    res.redirect('/')
}));

router.get('/questions/edit/:id(\\d+)',  csrfProtection, asyncHandler(async (req, res) => {
    const questionId = parseInt(req.params.id);
    //console.log("QUESTIONID!!!!", questionId)
    
    const questionEdit = await db.Question.findByPk(questionId);
    //console.log("QUESTIONUPDATE!@#!@#@!$", questionEdit)

    res.render('edit-question', {
        headline: questionEdit.headline,
        content: questionEdit.content,
        questionId,
        csrfToken: req.csrfToken()
    });
}));

router.use((req, res, next) => {
    console.log("REQUEST HITS HERE  ===============================================")
    next();
  })

router.post('/questions/edit/:id(\\d+)', csrfProtection, asyncHandler(async (req, res) => {
    console.log("IN THE EDIT ROUTE")
    const questionId = parseInt(req.params.id, 10);
    const questionUpdate = await db.Question.findByPk(questionId);
    console.log("QUESTIONID!!!!", questionId)
    console.log("QUESTIONUPDATE!@#!@#@!$", questionUpdate)
    const {
        headline,
        content,
        
    } = req.body;
    const question = {
        headline,
        content,
        // csrfToken: req.csrfToken(),
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
