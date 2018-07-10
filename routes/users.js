const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');
const mongoose = require('mongoose');
const ObjectId = require('mongodb').ObjectID;
const jwt = require('jsonwebtoken');


//Register User
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

//Login to User account
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

//Change User Information

router.get('/update/:_id', ((req, res) => {
  User.findById({_id: req.params._id}, (err, user) => {
    if (err) return res.status(500).send(err);
    if(user){
      console.log(user)
      return res.json({
        success: true,
        token: user.signJWT(),
        id: user._id,
        name: user.name,
        username: user.username,
        email: user.email
      })
    }
    })
  }));

router.put('/update/:_id', (req, res) => {
  let UpdateUser = new User();
  console.log(req.params._id)
  User.findOneAndUpdate(req.params._id, {
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: UpdateUser.setPassword(req.body.password)
  }, function(err, result){
        if(err){
            console.log(err);
        }
        res.send('User Info Updated')
    });


})

//Delete User
router.delete('/profile/:_id', ((req, res) => {
  User.findByIdAndRemove({_id: req.params._id}, (err, result) => {
    if (err) return res.status(500).send(err);
    const responseMsg = {
      message: "User account successfully closed"
    };
    return res.status(200).send(responseMsg);
    console.log(result);
  });

}))


  module.exports = router;
