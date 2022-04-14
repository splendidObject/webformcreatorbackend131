var express = require('express');
var router = express.Router();
const User = require('../models/userSchema');


// USER ROUTES

//Create new user
router.post('/create/', async (req, res) => {

      var newUser = new User({
            username: req.body.username,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            age: req.body.age,
            address: {
                  line1: req.body.line1,
                  line2: req.body.line2,
                  city: req.body.city,
                  state: req.body.state,
                  zip: req.body.zip
            },
            contact: {
                  phone: req.body.phone,
                  email: req.body.email,
                  website: req.body.website
            }
      });

      await User.create(newUser);
      res.send("success");

});


//Get user by ID
router.get('/:id/', async (req, res) => {
      var user = await User.findById(req.params.id);
      res.send(user);
});

//Add Webform to user

router.post('/addactive/', async (req,res) => {
      
      var user = await User.findById(req.body.authorid);
      await user.forms.active.push(req.body.webformid);
      await user.save();
      res.send("success");
      
});




//test routes
router.get('/test/', (req, res) => {
      res.send('Works');
});

router.post('/test/', (req, res) => {

      res.send(req.body);
});



module.exports = router;