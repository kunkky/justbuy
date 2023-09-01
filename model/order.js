const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({

    productId: {
        type: String,
        minlength: 3,
        maxlength: 50,
        required: true
    },
    quantity: {
        type: String,
        maxlength: 50,
        required: true
    },
    paymentType: {
        type: String,
        minlength: 3,
        required: true
    }, 
    orderSatus: {
        type: String,
        minlength: 3,
        required: true
    },
    paymentRef: {
        type: String,
        minlength: 3,
        required: true
    },
    userId: {
        type: String,
        required: true,
        minlength: 3,
    },
    price: {
        type: String,
        required: true,
        minlength: 1,
    },
    delieveryAddress: {
        type: String,
        required: true,
        minlength: 3,
    },
    orderId: {
        type: String,
        required: true,
        minlength: 3,
        unique: true,
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

const Orders = mongoose.model('orders', orderSchema);
module.exports.Orders = Orders