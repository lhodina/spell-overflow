const express = require('express');
const router = express.Router();
const db = require("../db/models")
const { csrfProtection, asyncHandler } = require('./utils');
const bcrypt = require("bcryptjs")
const { check, validationResult } = require('express-validator');
const { loginUser, logoutUser } = require('../auth');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/signup', csrfProtection, (req, res) => {
  const user = db.User.build();

  res.render("signup", {
    title: 'Signup', // title isn't working
    user,
    csrfToken: req.csrfToken()
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
  } = req.body;
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
    loginUser(req, res, user);
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
}));

router.get('/login', csrfProtection, (req, res) => {
  res.render('login', {
    title: 'Login',
    csrfToken: req.csrfToken()
  });
});

const loginValidators = [
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email Address'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password'),
];


router.post('/login', csrfProtection, loginValidators, asyncHandler(async (req, res) => {
  const {
    email,
    password
  } = req.body;

  let errors = [];
  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    const user = await db.User.findOne({ where: { email } });

    if (user != null) {
      const passwordMatch = await bcrypt.compare(password, user.password.toString());

      if (passwordMatch) {
        loginUser(req, res, user);
        return res.redirect('/');
      }
    }
    errors.push('Login failed for the provided email and password.');
  } else {
    errors = validatorErrors.array().map((error) => error.msg);
  }
  res.render('login', {
    title: 'Login',
    email,
    errors,
    csrfToken: req.csrfToken(),
  });
}));

router.post('/logout', (req, res) => {
  delete req.session.auth;
    req.session.save(() => {
        res.redirect('/')
    })
});

router.get('/aboutus', csrfProtection, (req, res) => {
  res.render('about-us', {
    title: 'Aboutus',
    csrfToken: req.csrfToken()
  })
})

module.exports = router;
