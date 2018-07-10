const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Jentry = require('../models/jentry');
const mongoose = require('mongoose');
const passport = require('passport');

// Create Journal Entry
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

// Get all journal entries for a specific user by ID
router.get('/journalentries/:user_id', (req, res) => {
  Jentry.find({user_id: req.params.user_id}, (err, jentry) => {
    console.log(jentry + "this is what your looking for")
    if(err){
      console.log(err);
    }else{
      res.json({
        success: true,
        jentry: jentry
      })
    }
  })
})

// Get all journal entries for a specific Mood
// router.get('/journalentries', (req, res) => {
//   console.log(req.query)
//   console.log(req.params)
//   Jentry.find({mood: req.query.mood, user_id: req.query.user_id}, (err, jentry) => {
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

//Update Journal Entry By Entry ID
router.put('/journalentries/:_id', (req, res) => {
  Jentry.findOneAndUpdate(req.params._id, {
    mood: req.body.mood,
    location: req.body.location,
    date: req.body.date,
    journalEntry: req.body.journalEntry
  }, function(err, result){
        if(err){
            console.log(err);
        }
        res.send('Journal Entry Updated')
    });
  });

//Delete One Journal Entry by Entry ID
  router.delete('/journalentries/:_id', (req, res) => {
    Jentry.findOneAndRemove(req.params._id, (err, result) => {
      if (err) return res.status(500).send(err);
      const responseMsg = {
        message: "Your Journal Entry has been successfully removed"
      };
      return res.status(200).send(responseMsg);
      console.log(result);
    });

  });


module.exports = router;
