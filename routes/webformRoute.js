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
            expiresOn: new Date(Date.now() + 2629746000),
            title: req.body.title,
            body: req.body.body,
            isActive: req.body.isActive
      });

      await Webform.create(newWebform);
      res.send("success");

});




module.exports = router;