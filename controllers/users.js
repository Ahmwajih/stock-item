const User = require('../models/users');

module.exports = {
    list : async (req, res) => {

        const user = await User.find();
        res.status(200).send({
            error: false,
            message: 'List of users',
            data: user,
            details: await res.getModelListDetails(User)
        });
    },

    create : async (req, res) => {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).send({
            error: false,
            message: 'User created',
            data: newUser,
            details: await res.getModelListDetails(User)
        });
    },

    read : async (req, res) => {
        const user = await User.findById(req.params.id);
        res.status(200).send({
            error: false,
            message: 'User details',
            data: user,
            details: await res.getModelListDetails(User)
        });
    },

    update : async (req, res) => {
        const user = await User.findByIdAndUpdate(req.params.id, req.body   , { new: true });
        res.status(200).send({
            error: false,
            message: 'User updated',
            data: user,
            details: await res.getModelListDetails(User)
        });
    },

    delete : async (req, res) => {
        const user = await User.findByIdAndDelete(req.params.id);
        res.status(200).send({
            error: false,
            message: 'User deleted',
            data: user,
            details: await res.getModelListDetails(User)
        });
    }
}

