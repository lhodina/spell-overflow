const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const { check, validationResult } = require('express-validator');
const db = require("../db/models");
const { User, Question } = db;
const { requireAuth } = require('../auth');

// const authCheck = (req, res, next) => {
//     if (req.session.user) {
//         next();
//     } else {
//         res.redirect('/users/login');
//     };
// };

router.get('/', csrfProtection, asyncHandler(async (req, res) => {
    const questions = await Question.findAll();
    let userId = 0;
    if (req.session.user) {
        userId = req.session.user.userId;
    }
    res.render('index', { questions, userId, csrfToken: req.csrfToken() });
}));

router.get('/questions/new', requireAuth, csrfProtection, (req, res) => {
    res.render('new-question', { csrfToken: req.csrfToken() });
});

router.post('/', csrfProtection, asyncHandler(async (req, res) => {

}));

module.exports = router;
