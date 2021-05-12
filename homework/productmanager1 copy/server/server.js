const express = require('express');
const cors = require('cors');

const app = express();
const port = 8000;

// This will fire our mongoose.connect statement to initialize our database connection
require("./config/mongoose.config");
//require(".server/config/mongoose.config");
app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors({credentials:true, origin:"http://localhost:3000"}));

// This is where we import the users routes function from our user.routes.js file
const AllMyProductRoutes = require("./routes/product.routes");
//const AllMyProductRoutes = require(".server/routes/product.routes");
AllMyProductRoutes(app);

//Make sure "apps" is going into the required route

app.listen(port, () => console.log("The server is all fired up and ready to tell you about some products!"));