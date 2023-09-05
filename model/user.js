const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    
    email: {
        type: String,
        minlength: 3,
        unique: true,
        required: true
    },
    userType: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        minlength: 2,
        required: true
    },
    phone: {
        type: String,
        minlength: 3,
        maxlength: 15,
        required: true
    },
    address: {
        type: String,
        minlength: 3,
        required: true
    },

    hashedPassword: {
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

const Users = mongoose.model('users', userSchema);
module.exports.Users = Users