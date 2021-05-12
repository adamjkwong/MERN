const Product = require("../models/products.model");

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allDaProducts => res.status(200).json({ products: allDaProducts }))
        .catch(err => res.status(500).json({ message: "Something went wrong", error: err }));
};

module.exports.createAProduct = (req, res) => {
    Product.create(req.body)
        .then(newlyCreatedProduct => res.status(200).json({ products: newlyCreatedProduct }))
        .catch(err => res.status(500).json({ message: "Something went wrong", error: err }));
};

module.exports.findAProduct = (req, res) => {
	Product.findOne({ _id: req.params.id })
		.then(oneSingleProduct => res.status(200).json({ products: oneSingleProduct }))
		.catch(err => res.status(500).json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedProduct => res.json({ products: updatedProduct }))
    //adam -- look at this again why using an object. 
    .catch(err => res.status(500).json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.status(500).json({ message: "Something went wrong", error: err }));
};