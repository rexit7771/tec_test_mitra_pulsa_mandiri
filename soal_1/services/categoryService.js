const CategoryModel = require("../models/categoryModel");

module.exports = class CategoryService {
    static async fetchAllCategories() {
        try {
            const categories = await CategoryModel.getAllCategories();
            return categories;
        } catch (error) {
            throw error;
        }
    }

    static async fetchCategoryById(id) {
        try {
            const categories = await CategoryModel.getCategoryById(id);
            return categories;
        } catch (error) {
            throw error;
        }
    }

    static async addCategory(newCategory) {
        try {
            if (!newCategory.name) throw { status: 400, message: "Category Name is required" };

            await CategoryModel.addCategory(newCategory);
            return;
        } catch (error) {
            throw error;
        }
    }

    static async editCategory(id, editedCategory) {
        try {
            if (!editedCategory.name) throw { status: 400, message: "Category Name is required" };

            await CategoryModel.editCategory(id, editedCategory);
            return;
        } catch (error) {
            throw error;
        }
    }

    static async deleteCategory(id) {
        try {
            await CategoryModel.deleteCategoryById(id);
            return;
        } catch (error) {
            throw error;
        }
    }
}