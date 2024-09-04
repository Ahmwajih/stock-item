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

            req.body.userId = req.user._id;
            const currentProduct = await Product.findOne({_id: req.body.productId});
            if (currentProduct.quantity < req.body.quantity) {
                return res.status(400).send({
                    error: true,
                    message: 'Quantity not available',
                    details: await res.getModelListDetails(Sale)
                });
            }    else {
             const data = await Sale.create(req.body);
             // increment the value in MangoDb  by the quantity of the product
             const updatedProduct = await Sale.findByIdAndUpdate({_id: data.productId}, {quantity: currentProduct.quantity + data.quantity}, {new: true});

             res.status(201).send({
                 error: false,
                 message: 'Sale created',
                 data: data,
                 details: await res.getModelListDetails(Sale)
             });
         } 
    // const newSale = new Sale(req.body);
    // await newSale.save();
    // res.status(201).send({
    //   error: false,
    //   message: "Sale created",
    //   data: newSale,
    //   details: await res.getModelListDetails(Sale),
    // });
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
