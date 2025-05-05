const { sql } = require("../db/config");

module.exports = class CategoryModel {
    static tableName = "dbo.categories";
    static async getAllCategories() {
        try {
            const query = `SELECT * FROM ${this.tableName}`;
            const categories = await sql.query(query);
            return categories;
        } catch (error) {
            throw error;
        }
    }

    static async getCategoryById(id) {
        try {
            const query = `SELECT * FROM ${this.tableName} WHERE id = ${id}`;
            const category = await sql.query(query);
            return category;
        } catch (error) {
            throw error;
        }
    }

    static async addCategory(newCategory) {
        try {
            const query = `INSERT INTO ${this.tableName} (name)
            VALUES ('${newCategory.name}')`;
            await sql.query(query);
            return;
        } catch (error) {
            throw error;
        }
    }

    static async editCategory(id, editedCategory) {
        try {
            const query = `UPDATE ${this.tableName}
            SET name='${editedCategory.name}'
            WHERE id = ${id}`;
            await sql.query(query);
            return;
        } catch (error) {
            throw error;
        }
    }

    static async deleteCategoryById(id) {
        try {
            const query = `DELETE FROM ${this.tableName} WHERE id = ${id}`;
            await sql.query(query);
            return;
        } catch (error) {
            throw error;
        }
    }
}