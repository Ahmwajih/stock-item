const { mongoose } = require('../config/dbConnection');

const pwEncrypt = require('../helpers/pwEncrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        validate: 
        // Password must be at least 8 characters long and contain at least one number and one letter
        {
            validator: function (value) {
                return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value);
            },
            message: props => `${props.value} is not a valid password!`
        },
        set: pw => pwEncrypt(pw)
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate: 
        // Email must be in the correct format
        {
            validator: function (value) {
                return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
            },
            message: props => `${props.value} is not a valid email address!`
        }
    },
    firstName: {
        type: String,
        required: true,
        trim: true
    },

    lastName: {
        type: String,
        required: true,
        trim: true
    },

    isActive: {
        type: Boolean,
        default: true
    },

    isStaff: {
        type: Boolean,
        default: false
    },

    isAdmin: {
        type: Boolean,
        default: false
    },

    },
    {
        collection: 'users',
        timestamps: true
    }

);

const User = mongoose.model('User', userSchema);

module.exports = User;