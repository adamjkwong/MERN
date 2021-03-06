const express = require("express");
const app = express();
const port = 8000;

// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));


// This is where we import the users routes function from our user.routes.js file
const AllMyJokeRoutes = require("./server/routes/joke.routes");
AllMyJokeRoutes(app);

//Make sure "apps" is going into the required route

app.listen(port, () => console.log("The server is all fired up and ready to tell you some jokes!"));
