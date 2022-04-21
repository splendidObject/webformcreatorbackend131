var express = require('express');
var router = express.Router();
const User = require('../models/userSchema');
const Webform = require('../models/webformSchema');
const Element = require('../models/elementSchema');

// WEBFORM ROUTES

router.post('/create/', async (req, res) => {
      
      var newWebform = new Webform({
            author: req.body.author,
            createdOn: Date.now(),
            //need iso date info from front end for expiresOn
            expiresOn: new Date(Date.now() + 2629746000),
            title: req.body.title,
            body: req.body.body,
            isActive: req.body.isActive
      });

      await Webform.create(newWebform);

      await User.findOneAndUpdate(
            { _id: req.body.author },
            {
                  $push: { [`forms.${req.body.formType}`]: newWebform._id }
            },
            { safe: true, multi: false });

      
      res.send("success");

});

//Get webform by ID
router.get('/:id/', async (req, res) => {
      var user = await Webform.findById(req.params.id);
      res.send(user);
});





module.exports = router;