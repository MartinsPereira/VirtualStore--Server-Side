const mongoose = require('mongoose');

const BrandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: Object,
    required: true
  }
})

const Brand = mongoose.model('Brand', BrandSchema);

module.exports = Brand;