const User = require("../models/user.model");

module.exports.findAllJokes = (req, res) => {
  User.find()
    .then(allDaJokes => res.json({ users: allDaJokes }))
    .catch(err => res.status(500).json({ message: "Something went wrong", error: err }));
};

module.exports.createAJoke = (req, res) => {
  User.create(req.body)
    .then(newlyCreatedJoke => res.json({ user: newlyCreatedJoke }))
    .catch(err => res.status(500).json({ message: "Something went wrong", error: err }));
};

module.exports.findAJoke = (req, res) => {
	User.findOne({ _id: req.params.id })
		.then(oneSingleJoke => res.json({ user: oneSingleJoke }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingJoke = (req, res) => {
  User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedJoke => res.json({ user: updatedJoke }))
    .catch(err => res.status(500).json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAJoke = (req, res) => {
  User.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.status(500).json({ message: "Something went wrong", error: err }));
};
