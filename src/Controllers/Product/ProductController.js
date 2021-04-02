const Product = require('../../Models/Product')
const fs = require('fs');
const {promisify} = require('util');
const pipeline = promisify(require("stream").pipeline)
const url = require('url');

module.exports = {
  async create(req,res){

    if(req.file.detectedFileExtension != ".jpg" && req.file.detectedFileExtension != ".png") return res.send('Por favor escolha uma imagem Válida!');

    const fileName = req.file.originalName + Math.floor(Math.random * 1000) + req.file.detectedFileExtension;

    await pipeline(req.file.stream, fs.createWriteStream(`${__dirname}/../../public/uploads/products/${fileName}`))

    let urlServer = url.format({protocol: req.protocol,host: req.get('host') });
    try{
      const album = await Product.create({...req.body, img: `${urlServer}/uploads/products/${fileName}`});
      return res.send(product)
    }catch(err){
      return res.status(400).send({error: err})
    }
    
  },
  async searchOne(req,res){
    try{
      const product = await Product.findById(req.params.id).populate(['color','brand','size','category','type','occasion'])
      return res.send(product)
    }catch(err){
      return res.status(400).send({error: err})
    }
  }
};