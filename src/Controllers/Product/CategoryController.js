const Category = require('../../Models/CategoryProduct')

module.exports = {
  async create(req,res){
    const category = await Category.create(req.body)
    res.send(category)
  }
};