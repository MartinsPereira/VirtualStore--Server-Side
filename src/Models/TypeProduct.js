const mongoose = require('mongoose');

const TypeProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
})

const TypeProduct = mongoose.model('TypeProduct', TypeProductSchema);

module.exports = TypeProduct;