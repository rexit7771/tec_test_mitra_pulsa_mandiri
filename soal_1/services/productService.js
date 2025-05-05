const ProductModel = require("../models/productModel");

module.exports = class ProductService {
    static async fetchAllProducts() {
        try {
            const products = await ProductModel.getAllProducts();
            return products;
        } catch (error) {
            throw error;
        }
    }

    static async fetchProductById(id) {
        try {
            const product = await ProductModel.getProductById(id);
            return product;
        } catch (error) {
            throw error;
        }
    }

    static async addProduct(newProduct) {
        try {
            if (!newProduct.name) throw { status: 400, message: "Product Name is required" };
            if (!newProduct.price) throw { status: 400, message: "Product Price is required" };
            if (!newProduct.stock) throw { status: 400, message: "Product Stock is required" };
            if (!newProduct.category_id) throw { status: 400, message: "Product category_id is required" };

            await ProductModel.addProduct(newProduct);
            return;
        } catch (error) {
            throw error;
        }
    }

    static async editProduct(id, editedProduct) {
        try {
            if (!editedProduct.name) throw { status: 400, message: "Product Name is required" };
            if (!editedProduct.price) throw { status: 400, message: "Product Price is required" };
            if (!editedProduct.stock) throw { status: 400, message: "Product Stock is required" };
            if (!editedProduct.category_id) throw { status: 400, message: "Product category_id is required" };

            await ProductModel.editProduct(id, editedProduct);
            return;
        } catch (error) {
            throw error;
        }
    }

    static async deleteProductById(id) {
        try {
            await ProductModel.deleteProductById(id);
            return;
        } catch (error) {
            throw error;
        }
    }
}