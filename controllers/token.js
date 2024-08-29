const token = require('../models/token');

module.exports = {
    list: async (req, res) => {
            
            const token = await token.find();
            res.status(200).send({
                error: false,
                message: 'List of tokens',
                data: token,
                details: await res.getModelListDetails(token)
            });
        },

    create: async (req, res) => {
        const newToken = new token(req.body);
        await newToken.save();
        res.status(201).send({
            error: false,
            message: 'Token created',
            data: newToken,
            details: await res.getModelListDetails(token)
        });
    },

    read: async (req, res) => {
        const token = await token.findById(req.params.id);
        res.status(200).send({
            error: false,
            message: 'Token details',
            data: token,
            details: await res.getModelListDetails(token)
        });
    },

    update: async (req, res) => {
        const token = await token.findByIdAndUpdate (req.params.id, req.body, { new: true });
        res.status(200).send({
            error: false,
            message: 'Token updated',
            data: token,
            details: await res.getModelListDetails(token)
        });
    },

    delete: async (req, res) => {
        const token = await token.findByIdAndDelete(req.params.id);
        res.status(200).send({
            error: false,
            message: 'Token deleted',
            data: token,
            details: await res.getModelListDetails(token)
        });

    }
}

