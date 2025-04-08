const { Sequelize } = require('sequelize');
const dbConfig = require('./config').development;

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
});

async function conectarBanco() {
  try {
    await sequelize.authenticate();
    console.log('🟢 Conexão com o banco foi bem-sucedida.');
  } catch (error) {
    console.error('🔴 Erro ao conectar com o banco:', error);
  }
}

ConectarBanco();

module.exports = sequelize;

