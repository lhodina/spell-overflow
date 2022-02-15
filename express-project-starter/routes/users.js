const express = require('express');
const router = express.Router();
const db = require("../db/models")
const { csrfProtection, asyncHandler } = require('./utils');
const bcrypt = require("bcryptjs")
const { check, validationResult } = require('express-validator');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/user/signup', csrfProtection, (req, res) => {
  const user = db.User.build();

  res.render("signup", {
    csrfToken: req.csrfToken(),
    user
  });
});


const userValidators = [
  check('firstName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for First Name')
    .isLength({ max: 50 })
    .withMessage('First Name must not be more than 50 characters long'),
  check('lastName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Last Name')
    .isLength({ max: 50 })
    .withMessage('Last Name must not be more than 50 characters long'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password')
    .isLength({ max: 50 })
    .withMessage('Password must not be more than 50 characters long'),
  check('confirmPassword')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Confirm Password')
    .isLength({ max: 50 })
    .withMessage('Confirm Password must not be more than 50 characters long')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Confirm Password does not match Password');
      }
      return true;
    }),
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email Address')
    .isLength({ max: 255 })
    .withMessage('Email Address must not be more than 255 characters long')
    .isEmail()
    .withMessage('Email Address is not a valid email'),
];



router.post('/signup', csrfProtection, userValidators, asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    username,
    password,
    email
  }= req.body;

  const user = await db.User.build({
    firstName,
    lastName,
    username,
    password,
    email
  });

  const validatorErrors = validationResult(req);
  
  if (validatorErrors.isEmpty()) {
    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    await user.save();
    res.redirect('/');
  } else {
    errors = validatorErrors.array().map((error) => error.msg);

    res.render('signup', {
      title: 'SignUp',
      user,
      errors,
      csrfToken: req.csrfToken(),
    });
  }

  res.redirect("/");
}));



module.exports = router;
