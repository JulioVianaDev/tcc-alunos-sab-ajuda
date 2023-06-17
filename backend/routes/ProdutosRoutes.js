const router = require('express').Router()
const ProdutosController = require('../controllers/ProdutoController')

// http://localhost:3001/produtos/
router.get('/',ProdutosController.getAll)
router.post('/',ProdutosController.createProduto)

// http://localhost:3001/produtos/:id
router.put('/:id',ProdutosController.editProduct)
router.delete('/:id',ProdutosController.deleteProduto)

module.exports = router