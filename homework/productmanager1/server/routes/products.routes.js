const ProductController = require('../controllers/product.controller');

module.exports = app => {
    app.get("/api/products", ProductController.findAllProducts);
    app.post("/api/products", ProductController.createAProduct);
    app.get("/api/products/:id", ProductController.findAProduct);
    app.put("/api/products/:id", ProductController.updateExistingProduct);
    app.delete("/api/products/:id", ProductController.deleteAProduct);
};