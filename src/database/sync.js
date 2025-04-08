const sequelize = require('./database');
const Produto = require('./models/Produto');

(async () => {
  await sequelize.sync({ force: false }); // force: true recria as tabelas do zero
  console.log('Tabelas sincronizadas!');
})();

