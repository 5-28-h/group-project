const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const config = require('../config/database');
const jwt = require('jsonwebtoken');


const UserSchema =  mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

UserSchema.method("setPassword", function(password){
  this.password = bcrypt.hashSync(password, 10);
  return this.password;
});

UserSchema.method("validatePassword", function(password){
return  (bcrypt.compareSync(password, this.password));
});

UserSchema.method("signJWT", function(){
  return jwt.sign({
    id:this._id,
    username: this.username,
  }, config.secret);
});


const User = module.exports = mongoose.model('User', UserSchema);
