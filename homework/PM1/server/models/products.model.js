const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
	title: {
        type: String,
        required: [true, "you must have a title for your product"],
        minLength: [3, "your title must be at least 3 characters"],
    },
	price: {
        type: Number,
        required: [true, "you must have a price for your joke"],
        minNumbers: [1, "your price must be at least 1 character"],
        //How do I make this something like >= 1? 
    },
    description : {
        type: String,
        required: [true, "you must have a description for your product"],
        minLength: [8, "your title must be at least 3 characters"],
    },
},
    { timestamps: true });

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
