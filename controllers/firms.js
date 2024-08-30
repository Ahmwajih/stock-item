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
            /*
            #swagger.tags = ['Firms']

            #swagger.summary = 'Create Single firm'
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: { $ref: '#/definitions/firms' }
            }
            */
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
            /*
            #swagger.tags = ['Firms']
            #swagger.summary = 'Get Single firm'
            */

            const firm = await Firm.findById(req.params.id);
            res.status(200).send({
                error: false,
                message: 'Firm details',
                data: firm,
                details: await res.getModelListDetails(Firm)
            });
        },


        update : async (req, res) => {
            /*
            #swagger.tags = ['Firms']
            #swagger.summary = 'Update Firm'
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: { $ref: '#/definitions/firms' }
            }
            */
            const firm = await Firm.findByIdAndUpdate(req.params.id, req.body   , { new: true });
            res.status(200).send({
                error: false,
                message: 'Firm updated',
                data: firm,
                details: await res.getModelListDetails(Firm)
            });
        },


        delete : async (req, res) => {
            /*
            #swagger.tags = ['Firms']
            #swagger.summary = 'Delete Firm'
            */
           
            const firm = await Firm.findByIdAndDelete(req.params.id);
            res.status(200).send({
                error: false,
                message: 'Firm deleted',
                data: firm,
                details: await res.getModelListDetails(Firm)
            });
        }
}

