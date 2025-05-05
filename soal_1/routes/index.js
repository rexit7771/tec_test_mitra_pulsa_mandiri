const { categoryRoutes } = require("./categoryRoutes");
const { productRoutes } = require("./productRoutes");

const router = require("express").Router();

router.use("/products", productRoutes);
router.use("/categories", categoryRoutes);

module.exports = { router };