const ProductController = require("../controllers/productController");

const productRoutes = require("express").Router();

productRoutes.get("/", ProductController.fetchAllProducts);
productRoutes.post("/", ProductController.addProduct);
productRoutes.get("/:id", ProductController.fetchProductById);
productRoutes.put("/:id", ProductController.editProduct);
productRoutes.delete("/:id", ProductController.deleteProduct);

module.exports = { productRoutes }