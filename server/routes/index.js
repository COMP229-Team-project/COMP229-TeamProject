"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let express = require("express");
let router = express.Router();
router.get("/", (req, res, next) => {
    res.render("content/index", {
        title: "Home",
        books: "",
    });
});
exports.default = router;
//# sourceMappingURL=index.js.map