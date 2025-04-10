const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Produto = sequelize.define('Produto', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  preco: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },
  descricao: {
    type: DataTypes.STRING
  },
  imagem: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'produtos',
  timestamps: false,
});

module.exports = Produto;
