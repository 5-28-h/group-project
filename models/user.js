const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


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
  let hashpassword = bcrypt.hashSync(password, 10);
 return hashpassword;
});


const User = module.exports = mongoose.model('User', UserSchema);
