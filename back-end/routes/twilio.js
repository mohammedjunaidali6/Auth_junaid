const express = require('express');
const router = express.Router();
const twilio = require("../controllers/twilio");
const middleware = require("../middleware/authorization");

router.get('/phone-otp' , middleware.verify ,twilio.phoneOtpSend); 
// router.post('/phone-otp-verify', twilio.phoneOtpVerify) 
         
module.exports = router