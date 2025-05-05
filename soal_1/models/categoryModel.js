const { pool } = require("../db/config");

module.exports = class CategoryModel {
    static tableName = "dbo.categories";
    static async getAllCategories() {
        try {
            const query = `SELECT * FROM ${this.tableName}`;
            const categories = await pool.request().query(query);
            return categories.recordset;
        } catch (error) {
            throw error;
        }
    }

    static async getCategoryById(id) {
        try {
            const query = `SELECT * FROM ${this.tableName} WHERE id = @id`;
            const category = await pool.request().input("id", id).query(query);
            return category.recordset[0];
        } catch (error) {
            throw error;
        }
    }

    static async addCategory(newCategory) {
        try {
            const query = `INSERT INTO ${this.tableName} (name)
            VALUES (@name)`;
            await pool.request()
                .input('name', newCategory.name)
                .query(query);
            return;
        } catch (error) {
            throw error;
        }
    }

    static async editCategory(id, editedCategory) {
        try {
            const query = `UPDATE ${this.tableName}
            SET name=@name
            WHERE id = @id`;
            await pool.request()
                .input('id', id)
                .input('name', editedCategory.name)
                .query(query);
            return;
        } catch (error) {
            throw error;
        }
    }

    static async deleteCategoryById(id) {
        try {
            const query = `DELETE FROM ${this.tableName} WHERE id = @id`;
            await pool.request()
                .input('id', id)
                .query(query);
            return;
        } catch (error) {
            throw error;
        }
    }
}