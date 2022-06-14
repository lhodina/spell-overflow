const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { sequelize } = require('./db/models');
const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store);
// set up session middleware
const store = new SequelizeStore({ db: sequelize });

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const questionsRouter = require('./routes/questions');

const answersRouter = require('./routes/answers');

const { environment, sessionSecret } = require('./config');
const { restoreUser } = require('./auth');

const app = express();

// view engine setup
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(sessionSecret));
app.use(express.static(path.join(__dirname, 'public')));


app.use(
  session({
    secret: sessionSecret,
    store,
    saveUninitialized: false,
    resave: false,
  })
);

app.use(restoreUser);

// app.use((req, res, next) => {
//   console.log("request hits here ===============================================")
//   next();
// })
// create Session table if it doesn't already exist
app.use((req, res, next) => {
  let { history } = req.session;
  if (!history) {
    history = [];
    req.session.history = history;
  }
  const url = `${req.protocol}://${req.get('host')}${req.originalUrl}`;

  history.unshift(url);
  next();
})

store.sync();

app.use('/users', usersRouter);

app.use(questionsRouter);

app.use(answersRouter);

app.use(indexRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
