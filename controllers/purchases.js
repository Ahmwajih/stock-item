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
            /*
                    #swagger.tags = ["Purchases"]
                    #swagger.summary = "Create Single purchases"
                */
                    const data = await Purchase.create(req.body)

                    const updateProducts = await Product.updateOne({_id: data.productId }, { $inc: { quantity: +data.quantity}})
                    // $inc is a mongoDB operator that increments the value of the field by the specified amount.
            
                    res.status(201).send({
                        error: false,
                        data
                    })
            
            // const newPurchase = new Purchase(req.body);
            // await newPurchase.save();
            // res.status(201).send({
            //     error: false,
            //     message: 'Purchase created',
            //     data: newPurchase,
            //     details: await res.getModelListDetails(Purchase)
            // });
        },

        read : async (req, res) => {
            /*
                    #swagger.tags = ["Purchases"]
                    #swagger.summary = "Get Single purchase"
                */
            const purchase = await Purchase.findById(req.params.id);
            res.status(200).send({
                error: false,
                message: 'Purchase details',
                data: purchase,
                details: await res.getModelListDetails(Purchase)
            });
        },

        update : async (req, res) => {
            /*
                    #swagger.tags = ["Purchases"]
                    #swagger.summary = "Update Purchase"
                    #swagger.parameters['body'] = {
                        in: 'body',
                        required: true,
                        schema: { $ref: '#/definitions/purchases' }
                    }
                */
            const purchase = await Purchase.findByIdAndUpdate(req.params.id, req.body   , { new: true });
            res.status(200).send({
                error: false,
                message: 'Purchase updated',
                data: purchase,
                details: await res.getModelListDetails(Purchase)
            });
        },

        delete : async (req, res) => {
            /*
                    #swagger.tags = ["Purchases"]
                    #swagger.summary = "Delete Purchase"
                */
            const purchase = await Purchase.findByIdAndDelete(req.params.id);
            res.status(200).send({
                error: false,
                message: 'Purchase deleted',
                data: purchase,
                details: await res.getModelListDetails(Purchase)
            });
        }
}