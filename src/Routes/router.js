const { Router } = require('express');
const multer = require('multer')
const ProductController = require('../Controllers/Product/ProductController')
const ColorController = require('../Controllers/Product/ColorController')
const SizeController = require('../Controllers/Product/SizeController')
const TypeProductController = require('../Controllers/Product/TypeProductController')
const OccasionController = require('../Controllers/Product/OccasionController')
const CategoryController = require('../Controllers/Product/CategoryController')
const BrandController = require('../Controllers/Product/BrandController')
const CommentController = require('../Controllers/Product/CommentController')
const UserController = require('../Controllers/UserController')
const authMiddleware = require('../middlewares/auth');
const CartController = require('../Controllers/Product/CartController');

const routes = Router();
const upload = multer();

routes.post('/cadastrar/produto',ProductController.create)
routes.post('/cadastrar/produto/cor',ColorController.create)
routes.post('/cadastrar/produto/marca',BrandController.create)
routes.post('/cadastrar/produto/categoria',CategoryController.create)
routes.post('/cadastrar/produto/tamanho',SizeController.create)
routes.post('/cadastrar/produto/ocasiao',OccasionController.create)
routes.post('/cadastrar/produto/tipo',TypeProductController.create)
routes.post('/cadastrar/produto/comentario', authMiddleware ,CommentController.create)
routes.post('/cadastrar/usuario',UserController.create)
routes.get('/procurar/produto/:id', ProductController.searchOne)
routes.get('/procurar/all/marca', BrandController.searchAll)
routes.get('/procurar/carrinho/produto', authMiddleware, CartController.search)
routes.get('/users',authMiddleware, UserController.searchAll)
routes.post('/authenticate', upload.none(), UserController.authenticate)

module.exports = routes;