const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Jentry = require('../models/jentry');
const mongoose = require('mongoose');
const passport = require('passport');


router.post('/profile', (req, res, next) => {
  let newEntry = new Jentry();
  console.log(req.body)
    newEntry.user_id = req.body.id;
    newEntry.journalEntry = req.body.journalEntry;
    newEntry.mood = req.body.mood;
    newEntry.location = req.body.location;
    newEntry.date = req.body.date;

    newEntry.save((err) => {
    if(err) {
      res.send(err);
    } else {
      res.sendStatus(200);
    }
  })
});

// router.post('/journalentries', passport.authenticate('jwt', {session:false}), (req, res) => {
//   Jentry.find({user_id: req.user.id}, (err, jentry) => {
//     console.log(jentry + "this is what your looking for")
//     if(err){
//       console.log(err);
//     }else{
//       res.json({
//         success: true,
//         jentry: jentry
//       })
//     }
//   })
// })



module.exports = router;
