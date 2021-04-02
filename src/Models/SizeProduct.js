const mongoose = require('mongoose');

const SizeSchema = new mongoose.Schema({
  size: {
    type: String,
    required: true,
  },
})

const Size = mongoose.model('Size', SizeSchema);

module.exports = Size;