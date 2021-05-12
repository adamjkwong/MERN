const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
	name: {
        type: String,
        required: [true, "you must have a name for this author"],
        minLength: [3, "your author name must be at least 3 characters"],
    },
},
    { timestamps: true });

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;
