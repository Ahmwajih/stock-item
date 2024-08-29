const {mongoose} = require('../config/dbConnection');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
},
{
    collection: 'categories',
    timestamps: true
});


module.exports = mongoose.model('Category', categorySchema);