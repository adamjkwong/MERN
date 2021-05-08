const Product = require("../models/products.model");

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allDaProducts => res.status(200).json({ products: allDaProducts }))
        .catch(err => res.status(500).json({ message: "Something went wrong", error: err }));
};

module.exports.createAProduct= (req, res) => {
    Product.create(req.body)
        .then(newlyCreatedProduct => res.status(200).json({ products: newlyCreatedProduct }))
        .catch(err => res.status(500).json({ message: "Something went wrong", error: err }));
};