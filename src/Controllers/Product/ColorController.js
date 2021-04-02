const Color = require('../../Models/ColorProduct')

module.exports = {
  async create(req,res){
    const color = await Color.create(req.body)
    res.send(color)
  }
};