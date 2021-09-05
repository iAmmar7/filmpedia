const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, '../.env') });

console.log('config', process.env);

module.exports.development = {
  dialect: 'mysql', // sequelize support more than one DB system, that's why we need to define the dialect
  seederStorage: 'sequelize',
  url: process.env.DB_URL,
};

module.exports.production = {
  dialect: 'mysql',
  url: process.env.DB_URL,
};
