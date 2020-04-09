var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    avatar: {
        data: Buffer,
        contentType: String
    },
    posts: [{
        type: String,
    }],
    meowtedPosts: [{
        type: String
    }],
    favoriteCats: [{
        type: String
    }]
});

module.exports = mongoose.model('User', UserSchema);