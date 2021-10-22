const mongoose = require("mongoose");

var booklistSchema = new mongoose.Schema({
   bookName: {
        type: String,
        required: true
    },
    authorName: {
        type: String,
        required: true

    }
})

module.exports = mongoose.model('Booklist', booklistSchema);