
const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const { check, validationResult } = require('express-validator');
const db = require("../db/models");
const { User, Question, Answer } = db;
const { requireAuth } = require('../auth');


router.get('/answers/new', csrfProtection, requireAuth, asyncHandler(async (req, res) => {
    res.render('new-answer', {
        csrfToken: req.csrfToken(),
    });
}));


// router.post('/questions/:id/answers', csrfProtection, requireAuth, asyncHandler(async (req, res) => {
//     res.render('/new-answer', {
//         csrfToken: csrfToken(),
//     });

// }));



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
