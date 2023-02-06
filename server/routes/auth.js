var express = require("express");
const { signinController, signupController } = require("../controller/auth");
var router = express.Router();
// Redirect the user to the Google signin page
router.post("/signin", signinController);
router.post("/signup", signupController);

module.exports = router;
