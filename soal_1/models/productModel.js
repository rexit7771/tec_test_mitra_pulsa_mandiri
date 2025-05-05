const { sql } = require("../db/config");

module.exports = class ProductModel {
    static tableName = 'dbo.products';
    static async getAllProducts() {
        try {
            let query = `SELECT * FROM ${this.tableName}`;
            const products = await sql.query(query);
            return products;
        } catch (error) {
            throw error;
        }
    }

    static async getProductById(id) {
        try {
            let query = `SELECT * FROM ${this.tableName} WHERE id = ${id}`;
            const product = await sql.query(query);

            return product;
        } catch (error) {
            throw error;
        }
    }

    static async addProduct(newProduct) {
        try {
            let id = 1;
            const products = await this.getAllProducts();
            if (products.recordsets.length !== 0) {
                let recent_product = products.recordsets[products.recordsets.length - 1]
                let recent_product_id = recent_product.id;
                id + 1;
            }

            let query = `INSERT INTO ${this.tableName} (id,name, price, stock, category_id)
            VALUES (${id},'${newProduct.name}', ${newProduct.price}, ${newProduct.stock}, ${newProduct.category_id})`;
            await sql.query(query);
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
            await sql.query(query);
            return;
        } catch (error) {
            throw error;
        }
    }

    static async deleteProductById(id) {
        try {
            let query = `DELETE FROM ${this.tableName} WHERE id = ${id}`;
            await sql.query(query);
            return;
        } catch (error) {
            throw error;
        }
    }
}