const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        minlength: 3,
        unique: true,
        required: true
    },
    productPrice: {
        type: String,
        required: true
    },
    productRate: {
        type: String,
        required: true
    },
    productCategories: {
        type: String,
        required: true
    },
    productAvalabilityStatus: {
        type: String,
        required: true
    },
    productImages: {
        type: String,
        required: true
    },
    productDetails: {
        type: String,
        required: true
    },
    productColors: {
        type: String,
        required: true
    },
    productSize: {
        type: String,
        required: true
    },
    productBrand: {
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

const Products = mongoose.model('products', productSchema);
module.exports.Products = Products