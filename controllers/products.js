const Product = require('../models/products');

module.exports = {
    list : async (req, res) => {
            
            const product = await Product.find();
            res.status(200).send({
                error: false,
                message: 'List of products',
                data: product,
                details: await res.getModelListDetails(Product)
            });
        },

        create : async (req, res) => {

            /*
            #swagger.tags = ["Products"]
            #swagger.summary = "Create Single products"
        */
            const newProduct = new Product(req.body);
            await newProduct.save();
            res.status(201).send({
                error: false,
                message: 'Product created',
                data: newProduct,
                details: await res.getModelListDetails(Product)
            });
        },

        read : async (req, res) => {
            /*
            #swagger.tags = ["Products"]
            #swagger.summary = "Get Single product"
        */

            const product = await Product.findById(req.params.id);
            res.status(200).send({
                error: false,
                message: 'Product details',
                data: product,
                details: await res.getModelListDetails(Product)
            });
        },

        update : async (req, res) => {
            /*
            #swagger.tags = ["Products"]
            #swagger.summary = "Update Product"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: { $ref: '#/definitions/products' }
            }
        */
            const product = await Product.findByIdAndUpdate(req.params.id, req.body   , { new: true });
            res.status(200).send({
                error: false,
                message: 'Product updated',
                data: product,
                details: await res.getModelListDetails(Product)
            });
        },

        delete : async (req, res) => {

            /*
            #swagger.tags = ["Products"]
            #swagger.summary = "Delete Product"
        */
            const product = await Product.findByIdAndDelete(req.params.id);
            res.status(200).send({
                error: false,
                message: 'Product deleted',
                data: product,
                details: await res.getModelListDetails(Product)
            });
        }
}