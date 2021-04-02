const Cart = require('../../Models/Cart');


module.exports = {
  async search(req,res){
    try{
      const response = await Cart.findOne().where('user').equals(req.id)
      res.send(response)
    }catch(err){
      res.status(400).send({error: err})
    }
  }
};