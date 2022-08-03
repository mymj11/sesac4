const express = require("express");
const router = express.Router();
const user = require("../controller/UserController");
// const {get_user} = require("../controller/UserController");

router.get("/a", function(req, res){
    res.send("Index");
});

router.get("/register", user.get_user);

module.exports = router;
// index.js를 module로 내보내자.