const mongoose = require('mongoose');

const OrderItemSchema = mongoose.Schema([{
    itemname: { type: String },
    qty: { type: Number },
    full: { type: Number },
    half: { type: Number },
    order_status: { type: String },
    user_id : { type: mongoose.Schema.Types.ObjectId }
    // name:  { type: String },
    // rollno: { type: Number },
    // order_status:  { type: String },
}]);

module.exports = mongoose.model('OrderItem', OrderItemSchema);
