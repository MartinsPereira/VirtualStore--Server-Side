const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  birthDate:{
    type: Date,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
  },
  type:{
    type: String,
    enum: ['Cliente','Funcionário','Gerente'],
    required: true,
  },
  address:{
    type: String,
  },
  numberAddress:{
    type: Number,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  cellphone: {
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true,
    select: false,
  },
  createAt: {
    type: Date,
    default: Date.now
  }
})

UserSchema.pre('save', async function(next){
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;

  next();
})

const User = mongoose.model('User', UserSchema);

module.exports = User;