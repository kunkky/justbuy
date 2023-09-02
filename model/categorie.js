const mongoose = require('mongoose');
const categorieSchema = new mongoose.Schema({
    categoryName: {
        type: String,
        minlength: 3,
        unique: true,
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

const Categories = mongoose.model('categories', categorieSchema);
module.exports.Categories = Categories