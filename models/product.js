const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    countInStock: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);

