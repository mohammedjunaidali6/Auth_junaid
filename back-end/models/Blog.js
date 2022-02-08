const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required:true
    }
})

module.exports = new mongoose.model("Blogs", blogSchema)