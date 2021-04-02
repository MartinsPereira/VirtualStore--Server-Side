const mongoose = require('mongoose');

const OccasionSchema = new mongoose.Schema({
  occasion: {
    type: String,
    required: true,
  },
})

const Occasion = mongoose.model('Occasion', OccasionSchema);

module.exports = Occasion;