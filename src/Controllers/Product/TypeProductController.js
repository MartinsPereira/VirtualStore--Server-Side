const TypeProduct = require('../../Models/TypeProduct')

module.exports = {
  async create(req,res){
    const type = await TypeProduct.create(req.body)
    res.send(type)
  }
};