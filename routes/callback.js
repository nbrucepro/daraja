const express = require("express");
const router=express.Router()
const { callbackController } = require("../controller/cback");

router.post("/callback",callbackController)

module.exports = router