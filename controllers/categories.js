const Category = require('../models/categories');

module.exports = {
    list: async (req, res) => {
        const category = await Category.find();
        res.status(200).send({
            error: false,
            message: 'List of categories',
            data: category,
            details: await res.getModelListDetails(Category)
        });
    },

    create: async (req, res) => {
                  /*
            #swagger.tags = ["Caregories"]
            #swagger.summary = "Create simple Brand"
        */
        const newCategory = new Category(req.body);
        await newCategory.save();
        res.status(201).send({
            error: false,
            message: 'Category created',
            data: newCategory,
            details: await res.getModelListDetails(Category)
        });
    },

    read: async (req, res) => {

        /*
        #swagger.tags = ["Categories"]
        #swagger.summary = "Get Single category"
    */
        const category = await Category.findById(req.params.id);
        res.status(200).send({
            error: false,
            message: 'Category details',
            data: category,
            details: await res.getModelListDetails(Category)
        });
    },

    update: async (req, res) => {

        /*
        #swagger.tags = ["Categories"]
        #swagger.summary = "Update Category"
        #swagger.parameters['body'] = {
            in: 'body',
            required: true,
            schema: { $ref: '#/definitions/categories' }
        }
    */
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).send({
            error: false,
            message: 'Category updated',
            data: category,
            details: await res.getModelListDetails(Category)
        });
    },

    delete: async (req, res) => {

        /*
        #swagger.tags = ["Categories"]
        #swagger.summary = "Delete Category"
    */
        const category = await Category.findByIdAndDelete(req.params.id);
        res.status(200).send({
            error: false,
            message: 'Category deleted',
            data: category,
            details: await res.getModelListDetails(Category)
        });
    }
}