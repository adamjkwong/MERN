const Joke = require("../models/jokes.model");

module.exports.findAllJokes = (req, res) => {
  Joke.find()
    .then(allDaJokes => res.status(200).json({ jokes: allDaJokes }))
    .catch(err => res.status(500).json({ message: "Something went wrong", error: err }));
};

module.exports.createAJoke = (req, res) => {
  Joke.create(req.body)
    .then(newlyCreatedJoke => res.status(200).json({ jokes: newlyCreatedJoke }))
    .catch(err => res.status(500).json({ message: "Something went wrong", error: err }));
};

module.exports.findAJoke = (req, res) => {
	Joke.findOne({ _id: req.params.id })
		.then(oneSingleJoke => res.json({ jokes: oneSingleJoke }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingJoke = (req, res) => {
  Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedJoke => res.json({ jokes: updatedJoke }))
    .catch(err => res.status(500).json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAJoke = (req, res) => {
  Joke.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.status(500).json({ message: "Something went wrong", error: err }));
};
