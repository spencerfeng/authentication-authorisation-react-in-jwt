var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

require('dotenv').config();

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// import models
let User = require('./models/User');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// create the 'local-signup' named strategy
passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
    session: false
},
function(req, username, password, done) {

    User.findOne({
        'email': username
    }, function(err, user) {
        if (err) {
            return done(err);
        }

        if (user) {
            return done(null, false);
        }

        let newUser = new User();

        newUser.email = username;
        newUser.password = newUser.generateHash(password);
        newUser.firstName = req.body.firstName;
        newUser.lastName = req.body.lastName;

        newUser.save(function(err) {
            if (err) {
                throw err;
            }

            // create a jwt
            const payload = {
                sub: newUser._id
            }
            const token = jwt.sign(payload, process.env.JWT_KEY);

            const data = {
                _id: newUser._id,
                email: newUser.email,
                firstName: newUser.firstName,
                lastName: newUser.lastName
            };

            return done(null, token, data);
        });

    });
}));

// create the route to handle user signup
app.post('/signup', function(req, res, next) {
    
    res.setHeader("Access-Control-Allow-Origin", "*");

    passport.authenticate('local-signup', function(err, token, userData) {

        if (err) {
            return res.status(400).json({
                success: false,
                message: err.message
            });
        }

        return res.json({
            success: true,
            message: 'You have successfully signed up and logged in',
            token: token,
            user: userData
        });
    })(req, res, next);
});

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
