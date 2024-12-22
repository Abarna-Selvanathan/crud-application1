const Product = require('../models/product');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;

// getProducts
const getProducts = async (req, res) => {
    try {
        const product = await Product.find();
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// getProduct
const getProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// createProduct
const createProduct = async (req, res) => {
    // Create product logic
    res.json({ message: 'Product created' });
};

// updateProduct
const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, price, countInStock } = req.body;
    try {
        const product = await Product.findById(id);
        if (product) {
            product.name = name || product.name;
            product.price = price !== undefined ? price : product.price;
            product.countInStock = countInStock !== undefined ? countInStock : product.countInStock;
            const updatedProduct = await product.save();
            res.json(updatedProduct);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// deleteProduct
const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);
        if (product) {
            await product.remove();
            res.json({ message: 'Product removed' });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { getProducts, getProduct, createProduct, updateProduct, deleteProduct };
