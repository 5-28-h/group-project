const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');


//register - express route
router.post('/register', (req, res, next) => {
  console.log(req.body);
  let newUser = new User();
    newUser.name = req.body.name;
    newUser.email = req.body.email;
    newUser.username = req.body.username;
    newUser.password = newUser.setPassword(req.body.password);

    newUser.save((err) => {
    if(err) {
      res.send(err);
    } else {
      res.sendStatus(200);
    }
  })
});

router.post('/login', ((req, res, next) => {
  passport.authenticate('local', function(err, user, info){
      if(err){
        return next(err);
      }
      if(user){
        return res.json({
          success: true,
          token: user.signJWT(),
          id: user._id,
          name: user.name,
          username: user.username,
          email: user.email
        })
      }
      return res.status(400).send(info);
      console.log(info)
    })(req, res, next);
}));


  module.exports = router;
