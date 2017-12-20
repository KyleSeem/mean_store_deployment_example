const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product name required'],
        maxlength: 50,
    },
    imageUrl: {
        type: String,
        required: [true, 'Product image url required'],
        match: [/^((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/, 'Please enter valid URL'],
        trim: true,
    },
    description: {
        type: String,
        required: [true, 'Product description required'],
        maxlength: 150,
    },
    qty: {
        type: Number,
        required: [true, 'Product starting quantity required'],
        min: [1, 'Quantity can only accept positive integers'],
    },
}); // close ProductSchema


// use below as starter product database if existing db is empty
// var Products = mongoose.model('Products', ProductSchema);
// var arr = [
//     { name: 'Purr-lock Holmes', description: 'Detective Pusheen Plush Toy', qty: 11, imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61rHzdTC0kL._AC_SR300,500_.jpg' },
//     { name: 'Cat Pillow', description: 'Orange pillow with cat', qty: 15, imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/812nde1dClL._AC_SR300,500_.jpg' },
//     { name: 'Cat Bag', description: 'Adorable cat-shaped purse', qty: 10, imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71KDaDYz7zL._AC_SR300,500_.jpg' },
//     { name: 'CatPack', description: 'Cat-shaped backpack', qty: 8, imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/713y+YDlLwL._AC_SR300,500_.jpg' },
//     { name: 'Measuring Cups', description: 'Ceramic cat-shaped measuring cups', qty: 32,
//     imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71mP+awRmZL._AC_SR300,500_.jpg' },
//     { name: 'Kitchen Tongs', description: 'Cat-paw kitchen tongs', qty: 25, imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41cOVhWGIuL._AC_SR300,500_.jpg' },
//     { name: 'Phone Case', description: 'Pink kitty phone case', qty: 12, imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31Mluy0B2tL._AC_UX300_UY500_SR300,500_.jpg' },
//     { name: 'Hanging Out', description: 'Cat pendant necklace', qty: 48, imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61bAr7EiKxL._AC_SR300,500_.jpg' },
//     { name: 'Slippers', description: 'Cute kitty slippers', qty: 20, imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/718vO+xhMzL._AC_SR300,500_.jpg'},
//     { name: 'Kitty Condo', description: 'Cat bed', qty: 15, imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61tsXl7jg7L._AC_SR300,500_.jpg'},
//     { name: 'DJ Paw-some', description: 'cat toy: record player design', qty: 10, imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61gRiray9+L._AC_SR300,500_.jpg'},
//     { name: 'Nightlight', description: 'Cat-shaped nightlight', qty: 30, imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41na5JUcNoL._AC_SR300,500_.jpg'},
//     { name: 'Charger', description: 'Portable cat-shaped charger', qty: 20, imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51hKJCMMM-L._AC_SR300,500_.jpg'},
//     { name: 'Headphones', description: 'Wireless cat-ear headphones', qty: 20, imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51gHeZYpTSL._AC_SR300,500_.jpg'},
//     { name: 'Plug Stopper', description: 'Cat catching ball dust plug stopper', qty: 30, imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/614gwJ4amyL._AC_SR300,500_.jpg'},
//     { name: 'Bottle Opener', description: 'Cat-shaped bottle opener', qty: 40, imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61J4AM7j2AL._AC_SR300,500_.jpg'},
//     { name: 'Kit-Tea Infuser', description: 'Cat-shaped hanging tea infuser', qty: 25, imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71euCbFa5QL._AC_SR300,500_.jpg'},
// ];
//
// Products.insertMany(arr, function(error, docs) {});

module.exports = mongoose.model('Products', ProductSchema);
