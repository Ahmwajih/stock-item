const {mongoose} = require('../config/dbConnection');

const firmSchema = new mongoose.Schema({

name: {
type: String,
required: true,
trim: true
},
phone: {
type: String,
required: true,
trim: true
},
adress: {
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

collection: 'firms',
timestamps: true
});


module.exports = mongoose.model('Firm', firmSchema);