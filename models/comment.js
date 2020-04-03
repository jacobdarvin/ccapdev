var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema ({
    username: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Comment', CommentSchema);