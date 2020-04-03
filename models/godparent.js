var mongoose = require('mongoose');

var GodparentSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    mobileNum: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        require: true
    },
    message: {
        type: String
    }
});

module.exports = mongoose.model('Godparent', GodparentSchema);