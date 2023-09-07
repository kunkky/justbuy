const mongoose = require("mongoose")

const billingInfoSchema = new mongoose.Schema({
    fullName: {
        type: String,
        minlength: 3,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    companyName: {
        type: String,
        minlength: 3
    },
    streetAddress: {
        type: String,
        minlength: 3,
        required: true
    },
    apartment:{
        type: String,
        minlength: 3,
        required: true
    },
    townCity: {
        type: String,
        minlength: 3,
        required: true
    }, 
    phoneNumber: {
        type: String,
        required: true
    }
})

const Billing = mongoose.model("Billing", billingInfoSchema);
module.exports.Billing = Billing