const mongoose = require('mongoose');

const OrderItemSchema = mongoose.Schema({
    itemname: { type: String },
    qty: { type: Number },
    full: { type: Number },
    half: { type: Number },
});

module.exports = mongoose.model('OrderItem', OrderItemSchema);
