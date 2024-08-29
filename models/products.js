const {mongoose} = require('../config/dbConnection');

const Category = require('./categories');
const Brand = require('./brands');


const productSchema = new mongoose.Schema({
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
        index: true
    },
    brandId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand',
        required: true,
        index: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    quantity	: {
        type: Number,
        required: true,
        index: true
    }
    },
    {
        collection: 'products',
        timestamps: true
    });

module.exports = mongoose.model('Product', productSchema);