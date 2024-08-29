const {mongoose} = require('../config/dbConnection');

const brandSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    Image: {
        type: String,
        required: true,
        trim: true
    }
},
{
    collection: 'brands',
    timestamps: true
});


module.exports = mongoose.model('Brand', brandSchema);