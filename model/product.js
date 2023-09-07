const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        minlength: 3,
        required: true
    },
    productPrice: {
        type: String,
        required: true
    },
    discountRate: {
        type: String,
        required: true
    },
    productRating: {
        type: Number,
        default: 1
    },
    productCategories: {
        type: [String],
        required: true
    },
    productAvalabilityStatus: {
        type: String,
        default:'available'

    },
    numberSold: {
        type: Number,
        default: 0
    },
    productImages: {
        type: [String],
        required: true
    },
    productDetails: {
        type: String,
        required: true
    },
    owner_Id: {
        type: String,
        required: true
    },
    productColors: {
        type: [String],
        default:[]
    },
    productSize: {
        type: [String],
        default:[]
    },
    productBrand: {
        type: String,
        required: true
    },
    isFeatured: {
        type: Boolean
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