const mongoose = require("mongoose");
const db_name = 'jokes';

mongoose.connect("mongodb://localhost/" + db_name, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("You are connected to the "+ db_name + " get ready for some laughs!"))
	.catch(err => console.log("Something went wrong when connecting to the database", err));