const express = require('express');
const router = express.Router();
const db = require("../db/models")
const { csrfProtection, asyncHandler } = require('../utils');
const bcrypt = require("bcryptjs")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/signup', (req, res) => {
  res.render("signup")  // create signup.pug
})

router.post('/signup', (req, res) => {
  res.redirect("/")   // home page
})



module.exports = router;
