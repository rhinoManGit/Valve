const express      = require('express');
const path         = require('path');
const favicon      = require('serve-favicon');
const morgan       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const session      = require('express-session');
const uuid         = require('node-uuid');
const routes       = require('./middlewares/routes');
const assignId     = require('./middlewares/assignId');
const pos          = require('./controllers/pos');
const app          = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/**
 *
 */
morgan.token('id', function getId(req) {
  return req.log_uuid;
});

app.use(assignId);
app.use(morgan(':status :method :url :response-time :date[web]'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(/favicon\.ico/, (req, res, next) => {
  res.end('ok');
});
app.use(session({
  resave           : true,
  saveUninitialized: false,
  genid            : function(req) {
    return uuid.v4(); // use UUIDs for session IDs
  },
  secret           : 'Learning point',
  name             : 'valve_token',
  cookie           : {
    httpOnly: true,
    maxAge  : 1000 * 60 * 10,
  },
}));
app.use(express.static(path.join(__dirname, 'static')));
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
      'Access-Control-Allow-Headers',
      'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild',
  );
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

  if (req.method === 'OPTIONS') {
    res.send(200);
  }
  else {
    next();
  }
});

app.use(function(req, res, next) {
  if (/Api\//.test(req.originalUrl)) {
    return pos(req, res, next);
  }
  else {
    next();
  }
});

app.use(routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {

  var err = new Error('Not Found');

  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {

  console.warn(`[NEXT]: ErrorID:${err.log_uuid}`);

  // 写入日志
  console.error(err);

  // render the error page
  res.status(err.status || 500);
  res.render('common/error', {message: '', error: err});
});

process.on('unhandledRejection', error => {
  // Will print "unhandledRejection err is not defined"
  console.log('unhandledRejection', error);
});

module.exports = app;


