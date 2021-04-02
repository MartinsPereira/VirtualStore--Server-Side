const Size = require('../../Models/SizeProduct')

module.exports = {
  async create(req,res){
    const size = await Size.create(req.body)
    return res.send(size)
  }
};