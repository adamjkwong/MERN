const Jokeontroller = require("../controllers/joke.controller");

module.exports = app => {
  app.get("/api/jokes", JokeController.findAllJokes);
  //get all jokes
  app.post("/api/jokes", JokeController.createAJoke);
  //create a new joke
  app.get("/api/jokes/:id", JokeController.findAJoke);
  //return a single joke matching this_id
  app.put("/api/jokes/:id", JokeController.updateExistingJoke);
  //update a single joke matching this_id
  app.delete("/api/jokes/:id", JokeController.deleteAJoke);
  //delete a single joke matching this_id
};

//I know I need to actually update the.. props here? 