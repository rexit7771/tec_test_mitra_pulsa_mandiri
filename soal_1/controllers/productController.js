const ProductService = require("../services/productService");

module.exports = class ProductController {
    static async fetchAllProducts(req, res) {
        try {
            const query = req.query;
            const products = await ProductService.fetchAllProducts(query);
            res.status(200).json({ data: products });
        } catch (error) {
            console.error(error);
            res.status(error.status || 500).json({ message: error.message || "Internal Server Error" });
        }
    }

    static async fetchProductById(req, res) {
        try {
            const product = await ProductService.fetchProductById(req.params.id);
            res.status(200).json({ data: product });
        } catch (error) {
            console.error(error);
            res.status(error.status || 500).json({ message: error.message || "Internal Server Error" });
        }
    }

    static async addProduct(req, res) {
        try {
            await ProductService.addProduct(req.body);
            res.status(201).json({ message: "Product has been added" });
        } catch (error) {
            console.error(error);
            res.status(error.status || 500).json({ message: error.message || "Internal Server Error" });
        }
    }

    static async editProduct(req, res) {
        try {
            await ProductService.editProduct(req.params.id, req.body);
            res.status(200).json({ message: `Product with id ${req.params.id} has been updated` });
        } catch (error) {
            console.error(error);
            res.status(error.status || 500).json({ message: error.message || "Internal Server Error" });
        }
    }

    static async deleteProduct(req, res) {
        try {
            await ProductService.deleteProductById(req.params.id);
            res.status(200).json({ message: `Product with id ${req.params.id} has been deleted` });
        } catch (error) {
            console.error(error);
            res.status(error.status || 500).json({ message: error.message || "Internal Server Error" });
        }
    }
}