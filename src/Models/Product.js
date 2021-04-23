const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  descount: {
    type: Number,
    default: 0
  },
  img: [{
    type: Object,
    required: true,
  }],
  amount:{
    type: Number,
    default: 0
  },
  color:[{
    type:  mongoose.Schema.Types.ObjectId,
    ref: "Color",
  }],
  size: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Size",
  }],
  category:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  type:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "TypeProduct",
    required: true,
  },
  brand:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Brand",
    required: true,
  },
  occasion:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Occasion",
    required: true,
  }],
  description:{
    type: String,
    required: true,
  },
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comments",
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  }
})

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;