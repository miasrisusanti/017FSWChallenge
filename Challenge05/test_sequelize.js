const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('db_CarsManagement', 'miasrisusanti', 'exoexo99', {
  host: 'localhost',
  dialect: 'postgres'
});

const test = async() => {
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

test();

module.exports = { sequelize }