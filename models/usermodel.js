const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    mobileno: { type: Number },
    rollno:  { type: Number },
    name:  { type: String },
    password:  { type: Number },
    wallet: { type: Number}
});

module.exports = mongoose.model('UserModel', UserSchema);