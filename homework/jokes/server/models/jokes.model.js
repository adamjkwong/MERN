const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	setup: {
        type: String,
        required: [true, "you must have a setup for your joke"],
        minLength: [3, "your setup must be at least 3 characters"],
    },
	punchline: {
        type: String,
        required: [true, "you must have a punchline for your joke"],
        minLength: [3, "your punchline must be at least 3 characters"],
    },
    funnyJoke : {
        type:Boolean,
        default: true,
    },
    jokeAuthor : {
        type: String,
        required: [true, "you must have an author for your joke"],
    },
},
    { timestamps: true });

const Joke = mongoose.model("Joke", JokeSchema);
//What does line 25 actually do? 

module.exports = Joke;
