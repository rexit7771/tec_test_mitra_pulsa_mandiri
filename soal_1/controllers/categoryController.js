const CategoryService = require("../services/categoryService");

module.exports = class CategoryController {
    static async fetchAllCategories(req, res) {
        try {
            const categories = await CategoryService.fetchAllCategories();
            res.status(200).json({ data: categories.recordsets });
        } catch (error) {
            console.error(error);
            res.status(error.status || 500).json({ message: error.message || "Internal Server Error" });
        }
    }

    static async fetchCategoryById(req, res) {
        try {
            const category = await CategoryService.fetchCategoryById(req.params.id);
            res.status(200).json({ data: category.recordset[0] });
        } catch (error) {
            console.error(error);
            res.status(error.status || 500).json({ message: error.message || "Internal Server Error" });
        }
    }

    static async addCategory(req, res) {
        try {
            await CategoryService.addCategory(req.body);
            res.status(201).json({ message: "New Category has been added" });
        } catch (error) {
            console.error(error);
            res.status(error.status || 500).json({ message: error.message || "Internal Server Error" });
        }
    }

    static async editCategory(req, res) {
        try {
            await CategoryService.editCategory(req.params.id, req.body);
            res.status(200).json({ message: `Category with id ${req.params.id} has been edited` });
        } catch (error) {
            console.error(error);
            res.status(error.status || 500).json({ message: error.message || "Internal Server Error" });
        }
    }

    static async deleteCategoryById(req, res) {
        try {
            await CategoryService.deleteCategory(req.params.id);
            res.status(200).json({ message: `Category with id ${id} has been deleted` });
        } catch (error) {
            console.error(error);
            res.status(error.status || 500).json({ message: error.message || "Internal Server Error" });
        }
    }
}