/*

 @file
 server/models/books.js
  Hyekyeong Park(Kate) || 301148613 || COMP229 || Midterm 

*/


let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);