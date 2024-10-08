const Brand = require("../models/brands");

module.exports = {
  list: async (req, res) => {
    const brand = await Brand.find();
    res.status(200).send({
      error: false,
      message: "List of brands",
      data: brand,
      details: await res.getModelListDetails(Brand),
    });
  },

  create: async (req, res) => {
    /*
            #swagger.tags = ["Brands"]
            #swagger.summary = "Create Single brands"
        */
    const newBrand = new Brand(req.body);
    await newBrand.save();
    res.status(201).send({
      error: false,
      message: "Brand created",
      data: newBrand,
      details: await res.getModelListDetails(Brand),
    });
  },

  read: async (req, res) => {

            /*
            #swagger.tags = ["Brands"]
            #swagger.summary = "Get Single brand"
        */
    const brand = await Brand.findById(req.params.id);
    res.status(200).send({
      error: false,
      message: "Brand details",
      data: brand,
      details: await res.getModelListDetails(Brand),
    });
  },

  update: async (req, res) => {

          /*
            #swagger.tags = ["Brands"]
            #swagger.summary = "Update Brand"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: { $ref: '#/definitions/brands' }
            }
        */
    const brand = await Brand.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).send({
      error: false,
      message: "Brand updated",
      data: brand,
      details: await res.getModelListDetails(Brand),
    });
  },

  delete: async (req, res) => {

            /*
            #swagger.tags = ["Brands"]
            #swagger.summary = "Delete Brand"
        */
    const brand = await Brand.findByIdAndDelete(req.params.id);
    res.status(200).send({
      error: false,
      message: "Brand deleted",
      data: brand,
      details: await res.getModelListDetails(Brand),
    });
  },
};
