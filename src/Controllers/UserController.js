const User = require('../Models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.json');
const Cart = require('../Models/Cart');
const { response } = require('express');

function generateToken(params = {}){
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
  });
}

module.exports = {
  async create(req,res){
    const {email} = req.body;
    try{
      if(await User.findOne({email})) return res.status(400).send({error: 'User alredy exists'});
      const user = await User.create(req.body)
      user.password = undefined;
      const cart = await Cart.create({user: user.id})
      return res.send({user, token: generateToken({id: user.id})})
    }catch(err){
      return res.status(400).send({error: err})
    }
  },
  
  async authenticate(req,res){
    const {email, password} = req.body;

    const user = await User.findOne({email}).select('+password');
    if(!user) return res.status(400).send({error: 'User not found'});

    if(!await bcrypt.compare(password, user.password))
      return res.status(400).send({error: 'Invalid Password'});

    user.password = undefined;

    return res.send({user, token: generateToken({id: user.id})})
  },
  async searchAll(req,res){
    try{
      const users = await User.find({_id: req.id})
      return res.send(users)
    }catch(err){
      res.status(400).send({error: err})
    }
  }
};