const Occasion = require('../../Models/OccasionProduct')

module.exports = {
  async create(req,res){
    const occasion = await Occasion.create(req.body)
    res.send(occasion)
  }
};