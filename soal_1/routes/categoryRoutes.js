const CategoryController = require("../controllers/categoryController");

const categoryRoutes = require("express").Router();

categoryRoutes.get("/", CategoryController.fetchAllCategories);
categoryRoutes.post("/", CategoryController.addCategory);
categoryRoutes.get("/:id", CategoryController.fetchCategoryById);
categoryRoutes.put("/:id", CategoryController.editCategory);
categoryRoutes.delete("/:id", CategoryController.deleteCategoryById);

module.exports = { categoryRoutes }