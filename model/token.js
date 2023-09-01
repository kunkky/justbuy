const mongoose = require('mongoose');
const tokenSchema = new mongoose.Schema({
    user_id: {
        type: String,
        minlength: 3,
        unique: true,
        required: true
    },
    token: {
        type: String,
        minlength: 2,
        required: true
    },
    createdAt: {
        type: Date,
        expires: '2d', // This sets the expiry date for 2 days
        default: Date.now
    },
    dateUpdated: {
        type: String,
        default: new Date()
    }


})

const Tokens = mongoose.model('tokens', tokenSchema);
module.exports.Tokens = Tokens