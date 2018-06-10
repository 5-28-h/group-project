const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');
const mongoose = require('mongoose');


//register - express route
router.post('/register', (req, res, next) => {
  let newUser = new User();
    newUser.username = req.body.username;
    newUser.password = newUser.setPassword(req.body.password);
    newUser.email = req.body.email;

    newUser.save((err) => {
    if(err) {
      res.send(err);
    } else {
      res.sendStatus(200);
    }
  })
});


  module.exports = router;
