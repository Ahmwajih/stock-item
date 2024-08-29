const Firm = require('../models/firms');

module.exports = {
    list : async (req, res) => {
            
            const firm = await Firm.find();
            res.status(200).send({
                error: false,
                message: 'List of firms',
                data: firm,
                details: await res.getModelListDetails(Firm)
            });
        },


        create : async (req, res) => {
            const newFirm = new Firm(req.body);
            await newFirm.save();
            res.status(201).send({
                error: false,
                message: 'Firm created',
                data: newFirm,
                details: await res.getModelListDetails(Firm)
            });
        },


        read : async (req, res) => {
            const firm = await Firm.findById(req.params.id);
            res.status(200).send({
                error: false,
                message: 'Firm details',
                data: firm,
                details: await res.getModelListDetails(Firm)
            });
        },


        update : async (req, res) => {
            const firm = await Firm.findByIdAndUpdate(req.params.id, req.body   , { new: true });
            res.status(200).send({
                error: false,
                message: 'Firm updated',
                data: firm,
                details: await res.getModelListDetails(Firm)
            });
        },


        delete : async (req, res) => {
            const firm = await Firm.findByIdAndDelete(req.params.id);
            res.status(200).send({
                error: false,
                message: 'Firm deleted',
                data: firm,
                details: await res.getModelListDetails(Firm)
            });
        }
}

