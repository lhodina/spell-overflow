const express = require('express');
const router = express.Router();
const db = require("../db/models")
const { csrfProtection, asyncHandler } = require('./utils');
const bcrypt = require("bcryptjs")
const { check, validationResult } = require('express-validator');
const { User, Question } = db;

// add authentication check

router.get('/', asyncHandler(async (req, res) => {
    const questions = await Question.findAll()
    let userId = 0;
    if (req.session.user) {
        userId = req.session.user.userId
    }
    // Task 23a
    res.render('index', { questions, userId, csrfToken: req.csrfToken() })
}));

router.get('/questions/new')

module.exports = router;
