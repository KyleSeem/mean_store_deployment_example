const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name cannot be blank'],
        maxlength: 20,
        trim: true,
        unique: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
}); // close CustomerSchema




module.exports = mongoose.model('Customers', CustomerSchema);
