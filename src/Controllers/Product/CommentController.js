const Comment = require('../../Models/CommentsProduct')

module.exports = {
  async create(req,res){
    const comment = await Comment.create({...req.body, author: req.id})
    return res.send(comment)
  }
};