var mongoose = require('mongoose');

var CatSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    image: {
        data: Buffer,
        contentType: String
    },
    gender: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    adoptionStatus: {
        type: String,
        required: true 
    },
    godParents: [{
        type: String
    }],
    location: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Cat', CatSchema);