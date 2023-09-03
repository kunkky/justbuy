const mongoose = require('mongoose');
const slideSchema = new mongoose.Schema({
    slideName: {
        type: String,
        minlength: 3,
        unique: true,
        required: true
    },
    slideDetails: {
        type: String,
        required: true
    },
    slideAction: {
        type: String,
        required: true
    },
    slideStatus: {
        type: String,
        required: true
    },
    slideImage: {
        type: String,
        required: true
    },
    slideClick: {
        type: String,
        required: true
    },
    dateCreated: {
        type: String,
        default: new Date()
    },

    dateUpdated: {
        type: String,
        default: new Date()
    }


})

const Slides = mongoose.model('slides', slideSchema);
module.exports.Slides = Slides