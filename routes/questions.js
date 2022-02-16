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
        content
    })
    //testQuestion.content = Question.content;
    await question.save();
    res.redirect('/')
}));

module.exports = router;
