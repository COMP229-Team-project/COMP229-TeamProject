/*

 @file
 server/config/index.js
  Hyekyeong Park(Kate) || 301148613 || COMP229 || Midterm 

*/




// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

module.exports = router;
