const Author = require("../models/authors.model");

module.exports.findAllAuthors = (req, res) => {
    Author.find()
        .then(allDaAuthors => res.status(200).json({ authors: allDaAuthors }))
        .catch(err => res.status(500).json({ message: "Something went wrong", error: err }));
};

module.exports.createAAuthor = (req, res) => {
    Author.create(req.body)
        .then(newlyCreatedAuthor => res.status(200).json({ authors: newlyCreatedAuthor }))
        .catch(err => res.status(500).json({ message: "Something went wrong", error: err }));
};

module.exports.findAAuthor = (req, res) => {
	Author.findOne({ _id: req.params.id })
		.then(oneSingleAuthor => res.status(200).json({ authors: oneSingleAuthor }))
		.catch(err => res.status(500).json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingAuthor = (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedAuthor => res.json({ authors: updatedAuthor }))
    //adam -- look at this again why using an object. 
    .catch(err => res.status(500).json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.status(500).json({ message: "Something went wrong", error: err }));
};