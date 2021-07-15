/*

 @file
 server/config/index.js
  Hyekyeong Park(Kate) || 301148613 || COMP229 || Midterm 

*/

import { NextFunction, Request, Response } from "express";

// modules required for routing
let express = require("express");
let router = express.Router();

/* GET home page. wildcard */
router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.render("content/index", {
    title: "Home",
    books: "",
  });
});

export default router;
