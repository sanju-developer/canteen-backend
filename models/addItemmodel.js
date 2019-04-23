
const mongoose = require('mongoose');

const AddItemSchema = mongoose.Schema({
    itemname: { type: String },
    qty: { type: Number },
    full: { type: Number },
    half: { type: Number },
    status: { type: String },
});

module.exports = mongoose.model('AddItem', AddItemSchema);
