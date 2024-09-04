const {mongoose} = require('../config/dbConnection');

const User = require('./users');
const Brand = require('./brands');
const Product = require('./products');

const saleSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true
    },
    brandId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand',
        required: true,
        index: true
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
        index: true
    },
    quantity: {
        type: Number,
        required: true,
        index: true
        // 
    },
    price: {
        type: Number,
        required: true,
        index: true
    },
    PriceTotal: {
        type: Number,
        required: true,
        index: true,
        default: 0,
        // Calculate the total price of the sale
        set: function (value) {
            return this.quantity * this.price;
        }
    }

    },
    {
        collection: 'sales',
        timestamps: true
    });

module.exports = mongoose.model('Sale', saleSchema);
