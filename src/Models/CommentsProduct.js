const mongoose = require('mongoose');

const CommentsSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  assessment:{
    type: Number,
    enum: [0.5,1,1.5,2,2.5,3,3.5,4,4.5,5],
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now
  }
})

const Comments = mongoose.model('Comments', CommentsSchema);

module.exports = Comments;