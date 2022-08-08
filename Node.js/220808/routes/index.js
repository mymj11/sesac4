const express = require("express");
const member = require("../controller/MemberController");
const router = express.Router();

router.get("/", member.get_members);
router.post("/register", member.post_comment);
router.post("/login", member.post_comment);
router.get("/get", member.get_member);
router.patch("/edit", member.patch_comment);
router.delete("/delete", member.delete_comment);
module.exports = router;