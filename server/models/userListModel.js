'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  firstname: String,
  surname: String,
  birthdate: { type: Date, default: Date.now },
  email: String,
  bodyinfo: {
    height: Number,
    weight: Number,
    bodyfat: Number,
    water: Number,
    bmi: Number,
  },
  profilepicture: String
})

module.exports = mongoose.model('user', UserSchema);
