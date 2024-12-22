const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    orderItems: [
        {
            name: { type: String, required: true },
            quantity: { type: Number, required: true },
            price: { type: String, required: true }
        }
    ],
    totalPrice: { type: String, required: true },
    paidAt: { type: Date }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);