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

var ord = mongoose.model('Orders', OrderSchema);
var arr = [
    { _id: '59ef893d704b311b1075205d', customer: 'Kyle Seem', product: 'Cat Pillow', qty: 2, _customer: '59ef5bc180d4bc15cc761110', _product: '59ee5e8f65280f15a38bd7b2', created_at: '2017-10-24T18:41:01.737Z', __v: 0 },
    { _id: '59efb45a1e0f0f1caf6fedf5', customer: 'Leah Alissa', product: 'Headphones', qty: 1, _customer: '59ef5bc880d4bc15cc761111', _product: '59ee5e8f65280f15a38bd7be', created_at: '2017-10-24T21:44:58.297Z', __v: 0 },
    { _id: '59efc4da9688dc1f75464b4b', customer: 'Marley TheCat', product: 'Kitty Condo', qty: 1, _customer: '59ef5bd580d4bc15cc761112', _product: '59ee5e8f65280f15a38bd7ba', created_at: '2017-10-24T22:55:22.697Z', __v: 0 },
    { _id: '59efc4f69688dc1f75464b4c', customer: 'Jess Fink', product: 'Plug Stopper', qty: 11, _customer: '59efc4709688dc1f75464b48', _product: '59ee5e8f65280f15a38bd7bf', created_at: '2017-10-24T22:55:50.157Z', __v: 0 },
    { _id: '59f0dcf5064c4d22dd5b6d50', customer: 'Jacob Langworthy', product: 'Hanging Out', qty: 1, _customer: '59efc44fea72921f6802368d', _product: '59ee5e8f65280f15a38bd7b8', created_at: '2017-10-25T18:50:29.707Z', __v: 0 },
    { _id: '59f0dd08064c4d22dd5b6d51', customer: 'Eric Feinstein', product: 'CatPack', qty: 2, _customer: '59efc4819688dc1f75464b49', _product: '59ee5e8f65280f15a38bd7b4', created_at: '2017-10-25T18:50:48.192Z', __v: 0 },
    { _id: '59f4a0db6d675d28f55c64e8', customer: 'English Alan', product: 'Bottle Opener', qty: 10, _customer: '59f49d3530b6bc28b2e56407', _product: '59ee5e8f65280f15a38bd7c0', created_at: '2017-10-28T15:23:07.010Z', __v: 0 },
];

ord.insertMany(arr, function(error, docs) {});

module.exports = mongoose.model('Orders', OrderSchema);
