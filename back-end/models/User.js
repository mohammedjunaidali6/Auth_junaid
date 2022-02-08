const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type:String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    // emailOTP: {
    //     type: String,
    // },
    // isEmailVerified: {
    //     type: Boolean,
    // },
    // isPhoneVerified: {
    //     type: Boolean,
    // }
})

module.exports = new mongoose.model("UserAuth", userSchema);