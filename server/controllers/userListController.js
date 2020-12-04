'use strict';

var mongoose = require('mongoose'),
User = mongoose.model('User');

exports.showUser = function(req, res) {
  User.find({}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.createUser = function(req, res) {
  let new_user = new User(req.body);
  new_user.save(function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.readUser = function(req, res) {
  User.findById(req.params.username, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.updateUser = function(req, res) {
  User.findOneAndUpdate({_id: req.params.username}, req.body, {new: true}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.deleteUser = function(req, res) {
  User.remove({
    _id: req.params.username
  }, function(err, user) {
    if (err)
      res.send(err);
    res.json({ message: 'User successfully deleted' });
  });
};
