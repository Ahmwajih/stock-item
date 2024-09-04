const {mongoose} = require('../config/dbConnection');
const brands = require('./brands');
const products = require('./products');
const firms = require('./firms');
const users = require('./users');

const purchaseSchema = new mongoose.Schema({
    userID : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true
    },
    firmId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Firm',
        required: true,
        index: true
    },

    brandId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand',
        required: true,
        index: true
    },
    productId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
        index: true 
        
    },
    quantity : {
        type: Number,
        required: true,
        index: true
        // when i add quantity it will be added to the priceTotal and the general quantity will be added to the quantity
    },
    price : {
        type: Number,
        required: true,
        index: true
    },
    priceTotal : {
        type: Number,
        index: true,
        default: 0,
        set: function (value) {
            return this.quantity * this.price;
        }
    }
},
{
    collection: 'purchases',
    timestamps: true
});


module.exports = mongoose.model('Purchase', purchaseSchema);