const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new mongoose.Schema({
    customer: {
        type: String,
        required: true,
    },
    product: {
        type: String,
        required: true,
    },
    qty: {
        type: Number,
        required: [true, 'Please select a quantity'],
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    _customer: { type: Schema.Types.ObjectId, ref: 'Customers' },
    _product: { type: Schema.Types.ObjectId, ref: 'Products' },
}); // close OrderSchema


module.exports = mongoose.model('Orders', OrderSchema);
