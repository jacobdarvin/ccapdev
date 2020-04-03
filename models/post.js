var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema ({
    username: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    caption: {
        type: String
    },
    image: {
        data: Buffer,
        contentType: String
    },
    meowts: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    cats: [{
        type: String
    }],
    comments: [{
        type: String
    }]
});

module.exports = mongoose.model('Post', PostSchema);