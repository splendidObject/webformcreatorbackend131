var express = require('express');
var router = express.Router();
const User = require('../models/userSchema');
const Webform = require('../models/webformSchema');

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
      res.send(newUser._id);

});


//Get user by ID
router.get('/:id/', async (req, res) => {
      var user = await User.findById(req.params.id).populate('forms.active').populate('forms.inactive').populate('forms.drafts');
      res.send(user);
});

//Add Webform to user
router.post('/addform/', async (req, res) => {

      var user = await User.findById(req.body.authorid);

      switch (req.body.formtype) {
            case "active":
                  await user.forms.active.push(req.body.webformid);
                  await user.save();
                  res.send("success");
                  break;
            case "inactive":
                  await user.forms.inactive.push(req.body.webformid);
                  await user.save();
                  res.send("success");
                  break;
            case "drafts":
                  await user.forms.drafts.push(req.body.webformid);
                  await user.save();
                  res.send("success");
                  break;
            default:
                  res.send("type error");
                  break;

      }


});


router.post('/moveform/', async (req, res) => {
      var userid = req.body.userid;
      var oldstatus = req.body.oldstatus;
      var newstatus = req.body.newstatus;

      await User.findOneAndUpdate(
            { _id: userid },
            {
                  $pull: { [`forms.${oldstatus}`]: { $in: webformid } },
                  $push: { [`forms.${newstatus}`]: webformid }
            },
            { safe: true, multi: false });

      res.send(req.body);
});


//test routes
router.get('/test/', (req, res) => {
      res.send('Works');
});

router.post('/test/', (req, res) => {

      res.send(req.body);
});









module.exports = router;