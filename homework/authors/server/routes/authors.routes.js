const AuthorsController = require('../controllers/authors.controller');

module.exports = app => {
    app.get("/api/authors", AuthorsController.findAllAuthors);
    app.post("/api/authors", AuthorsController.createAAuthor);
    app.get("/api/authors/:id", AuthorsController.findAAuthor);
    app.put("/api/authors/:id", AuthorsController.updateExistingAuthor);
    app.delete("/api/authors/:id", AuthorsController.deleteAAuthor);
};