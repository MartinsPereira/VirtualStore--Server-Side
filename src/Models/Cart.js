const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { truncate } = require('fs');

const CartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  product: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  }],
  createAt: {
    type: Date,
    default: Date.now
  }
})
const Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;