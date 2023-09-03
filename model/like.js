const mongoose = require('mongoose');
const likeSchema = new mongoose.Schema({
    user_id: {
        type: String,
        minlength: 3,
        unique: true,
        required: true
    },
    product_id: {
        type: String,
        minlength: 3,
        unique: true,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    dateUpdated: {
        type: String,
        default: new Date()
    }


})

const Likes = mongoose.model('likes', likeSchema);
module.exports.Likes = Likes