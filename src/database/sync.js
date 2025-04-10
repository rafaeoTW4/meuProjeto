const sequelize = require('./database');
const Produto = require('./models/Produto');

(async () => {
  try {
    await sequelize.sync({ force: false }); // force: true apaga e recria
    console.log('✅ Tabelas sincronizadas!');
  } catch (err) {
    console.error('Erro ao sincronizar:', err);
  } finally {
    await sequelize.close();
  }
})();
