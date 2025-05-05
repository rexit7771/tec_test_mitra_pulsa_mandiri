const { sql, getConnection } = require("../db/config");

module.exports = class ProductModel {
    static tableName = 'dbo.products';
    static async getAllProducts() {
        try {
            let query = `SELECT * FROM ${this.tableName}`;
            const products = await db.query(query);
            return products;
        } catch (error) {
            throw error;
        }
    }

    static async getProductById(id) {
        try {
            let query = `SELECT * FROM ${this.tableName} WHERE id = ${id}`;
            const product = await db.query(query);

            return product;
        } catch (error) {
            throw error;
        }
    }

    static async addProduct(newProduct) {
        try {
            let query = `INSERT INTO ${this.tableName} (name, price, stock, category_id)
            VALUES ('${newProduct.name}', ${newProduct.price}, ${newProduct.stock}, ${newProduct.category_id})`;
            await db.query(query);
            return;
        } catch (error) {
            throw error;
        }
    }

    static async editProduct(id, editedProduct) {
        try {
            let query = `UPDATE ${this.tableName}
            SET name='${editedProduct.name}', price=${editedProduct.price}, stock=${editedProduct.stock}
            WHERE id = ${id}`;
            await db.query(query);
            return;
        } catch (error) {
            throw error;
        }
    }

    static async deleteProductById(id) {
        try {
            let query = `DELETE FROM ${this.tableName} WHERE id = ${id}`;
            await db.query(query);
            return;
        } catch (error) {
            throw error;
        }
    }
}