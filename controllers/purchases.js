const Purchase = require('../models/purchases');

module.exports = {
    list : async (req, res) => {
            
            const purchase = await Purchase.find();
            res.status(200).send({
                error: false,
                message: 'List of purchases',
                data: purchase,
                details: await res.getModelListDetails(Purchase)
            });
        },

        create : async (req, res) => {
            const newPurchase = new Purchase(req.body);
            await newPurchase.save();
            res.status(201).send({
                error: false,
                message: 'Purchase created',
                data: newPurchase,
                details: await res.getModelListDetails(Purchase)
            });
        },

        read : async (req, res) => {
            const purchase = await Purchase.findById(req.params.id);
            res.status(200).send({
                error: false,
                message: 'Purchase details',
                data: purchase,
                details: await res.getModelListDetails(Purchase)
            });
        },

        update : async (req, res) => {
            const purchase = await Purchase.findByIdAndUpdate(req.params.id, req.body   , { new: true });
            res.status(200).send({
                error: false,
                message: 'Purchase updated',
                data: purchase,
                details: await res.getModelListDetails(Purchase)
            });
        },

        delete : async (req, res) => {
            const purchase = await Purchase.findByIdAndDelete(req.params.id);
            res.status(200).send({
                error: false,
                message: 'Purchase deleted',
                data: purchase,
                details: await res.getModelListDetails(Purchase)
            });
        }
}