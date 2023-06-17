const mongoose = require('mongoose')

const produtoSchema = new mongoose.Schema({
  nome: String,
  price: Number,
  desc: String,
  quantidade: Number,
  disponivel: Boolean,
  imageUrl: String,
  createdAt: {type: Date, default: Date.now}
})

const Produto = mongoose.model('produto',produtoSchema)

module.exports = Produto