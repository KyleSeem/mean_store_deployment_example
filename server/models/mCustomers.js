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


var cust = mongoose.model('Customers', CustomerSchema);
var arr = [
    { _id:'59ef5bc880d4bc15cc761111', name: "Leah Alissa", created_at:'2017-10-24T15:27:04.201Z', __v: 0 },
    { _id:'59ef5bd580d4bc15cc761112', name: "Marley TheCat", created_at:'2017-10-24T15:27:17.544Z', __v: 0 },
    { _id:'59efc44fea72921f6802368d', name: "Jacob Langworthy", created_at:'2017-10-24T22:53:03.378Z', __v: 0 },
    { _id:'59efc4709688dc1f75464b48', name: "Jess Fink", created_at:'2017-10-24T22:53:36.976Z', __v: 0 },
    { _id:'59efc4819688dc1f75464b49', name: "Eric Feinstein", created_at:'2017-10-24T22:53:53.221Z', __v: 0 },
    { _id:'59efc4cc9688dc1f75464b4a', name: "Kyle Seem", created_at:'2017-10-24T22:55:08.834Z', __v: 0 },
    { _id:'59f0ddbd064c4d22dd5b6d52', name: "Irish Joe", created_at:'2017-10-25T18:53:49.435Z', __v: 0 },
    { _id:'59f49d3530b6bc28b2e56407', name: "English Alan", created_at:'2017-10-28T15:07:33.269Z', __v: 0 },
];

cust.insertMany(arr, function(error, docs) {});

module.exports = mongoose.model('Customers', CustomerSchema);
