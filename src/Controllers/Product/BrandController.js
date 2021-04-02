const Brand = require('../../Models/BrandProduct')

module.exports = {
  async create(req,res){
    const brand = await Brand.create(req.body)
    res.send(brand)
  },
  async searchAll(req,res){
    try{
      const brand = await Brand.find()
      return res.send(brand)
    }catch(err){
      return res.status(400).send({error: err})
    }
  }
};