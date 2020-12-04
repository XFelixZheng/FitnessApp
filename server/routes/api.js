'use strict';
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


/*var userSchema = new mongoose.Schema({
  username: String,
  firstname: String,
  surname: String,
  birthdate: { type: Date, default: Date.now },
  email: String
})
var Model = mongoose.model("Model", userSchema, "users");*/

/*module.exports = function(app){
  const userList = require('../controllers/userListController');

  //routes
  app.route('/userlist')
    .get(userList.showUser)
    .post(userList.createUser)

  app.route('/user/:username')
    .get(userList.readUser)
    .put(userList.updateUser)
    .delete(userList.deleteUser);
}*/

// GET api listing.
router.get('/', (req, res) => {
  res.send('api workss');
});

// Get all posts
router.get('/users', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  // set up DB connection via mongoose
  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost/fitnessapp', {useNewUrlParser: true , useUnifiedTopology: true});
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    // we're connected!
  });

  const Model = require('../models/userListModel');
  Model.find({}, function (err, user) {
    if (err) return console.error(err);
    console.log(user);
  });


  /*axios.get(`${API}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });*/
});

module.exports = router;
