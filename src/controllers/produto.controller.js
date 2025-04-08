const Produto = require('../models/Produto');

const listarProdutos = async (req, res) => {
  const produtos = await Produto.findAll();
  return res.json(produtos);
};
