const { pool } = require("../db/config");

module.exports = class ProductModel {
    static tableName = 'dbo.products';
    static async getAllProducts(search) {
        try {
            let products = pool.request()
            let query = `
            SELECT p.id, p.name, p.price, p.stock, c.name as category
            FROM ${this.tableName} p
            LEFT JOIN categories c
            ON p.category_id = c.id`;

            if (search) {
                query += ` WHERE p.name LIKE @search`
                products = products.input("search", search)
            };

            products = await products.query(query);
            return products.recordset;
        } catch (error) {
            throw error;
        }
    }

    static async getProductById(id) {
        try {
            let query = `
            SELECT p.id, p.name, p.price, p.stock, c.name as category 
            FROM ${this.tableName} p
            LEFT JOIN categories c
            ON p.category_id = c.id
            WHERE p.id = @id`;
            const product = await pool.request()
                .input("id", id)
                .query(query);
            return product.recordset[0];
        } catch (error) {
            throw error;
        }
    }

    static async addProduct(newProduct) {
        try {
            let query =
                `INSERT INTO ${this.tableName} (name, price, stock, category_id)
            VALUES (
            @name, @price, 
            @stock, @category_id)`;
            await pool.request()
                .input("name", newProduct.name)
                .input("price", newProduct.price)
                .input("stock", newProduct.stock)
                .input("category_id", newProduct.category_id)
                .query(query);
            return;
        } catch (error) {
            throw error;
        }
    }

    static async editProduct(id, editedProduct) {
        try {
            let query = `UPDATE ${this.tableName}
            SET name=@name, price=@price, stock=@stock, category_id=@category_id
            WHERE id = @id`;
            await pool.request()
                .input("id", id)
                .input("name", editedProduct.name)
                .input("price", editedProduct.price)
                .input("stock", editedProduct.stock)
                .input("category_id", editedProduct.category_id)
                .query(query);
            return;
        } catch (error) {
            throw error;
        }
    }

    static async deleteProductById(id) {
        try {
            let query = `DELETE FROM ${this.tableName} WHERE id = @id`;
            await pool.request()
                .input("id", id)
                .query(query);
            return;
        } catch (error) {
            throw error;
        }
    }
}