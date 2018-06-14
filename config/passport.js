const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

passport.serializeUser(function(user, done){
  done(null, user);
});

passport.deserializeUser(function(obj, done){
  done(null, obj);
});

passport.use(new LocalStrategy(function(username, password, done){
  User.findOne({username:username}, function(err, user){
    if(err){
      return done(err);
    }
    if(!user){
      return done(null, false, {message: "Invalid user"});
    }
    if(!user.validatePassword(password)){
      return done(null, false, {message: 'Passwords dont match'});
    }
    return done(null, user);
  });
}));
