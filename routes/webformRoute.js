var express = require('express');
var router = express.Router();
const User = require('../models/userSchema');
const Webform = require('../models/webformSchema');
const Element = require('../models/elementSchema');

// WEBFORM ROUTES

router.post('/create/', async (req, res) => {
      console.log(req.body);
      

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

      
      res.send(newWebform._id);

});

//Get webform by ID
router.get('/:id/', async (req, res) => {
      var user = await Webform.findById(req.params.id).populate('elements');
      res.send(user);
});


//Elements

router.post('/newelement/', async (req, res) => {

      var newElement = new Element({
            label: req.body.label,
            inputType: req.body.inputType,
            isRequired: req.body.isRequired
      });

      await Element.create(newElement);

      
      res.send(newElement._id);

});


module.exports = router;