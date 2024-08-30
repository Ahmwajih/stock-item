const Sale = require("../models/sales");

module.exports = {
  list: async (req, res) => {
    const sale = await Sale.find();
    res.status(200).send({
      error: false,
      message: "List of sales",
      data: sale,
      details: await res.getModelListDetails(Sale),
    });
  },

  create: async (req, res) => {

    /*
            #swagger.tags = ["Sales"]
            #swagger.summary = "Create Single sale"
        */
    const newSale = new Sale(req.body);
    await newSale.save();
    res.status(201).send({
      error: false,
      message: "Sale created",
      data: newSale,
      details: await res.getModelListDetails(Sale),
    });
  },

  read: async (req, res) => {
    /*
            #swagger.tags = ["Sales"]
            #swagger.summary = "Get Single sale"
        */
    const sale = await Sale.findById(req.params.id);
    res.status(200).send({
      error: false,
      message: "Sale details",
      data: sale,
      details: await res.getModelListDetails(Sale),
    });
  },

  update: async (req, res) => {
    /*
            #swagger.tags = ["Sales"]
            #swagger.summary = "Update Sale"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: { $ref: '#/definitions/sales' }
            }
        */
    const sale = await Sale.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).send({
      error: false,
      message: "Sale updated",
      data: sale,
      details: await res.getModelListDetails(Sale),
    });
  },

  delete: async (req, res) => {
    /*
            #swagger.tags = ["Sales"]
            #swagger.summary = "Delete Sale"
        */
    const sale = await Sale.findByIdAndDelete(req.params.id);
    res.status(200).send({
      error: false,
      message: "Sale deleted",
      data: sale,
      details: await res.getModelListDetails(Sale),
    });
  },
};
