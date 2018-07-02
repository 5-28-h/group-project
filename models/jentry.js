const mongoose = require('mongoose');

//Journal Entry Schema
const JentrySchema =  mongoose.Schema({
  user_id: String,
  journalEntry: {
    type: String,
    required: true
  },
  mood: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }
});
const Jentry = module.exports = mongoose.model('Jentry', JentrySchema);
