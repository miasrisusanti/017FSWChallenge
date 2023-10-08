// Challenge 4 BINAR

const express = require('express');
const app = express();
const PORT = 8000;
const host = 'localhost';

const { Sequelize } = require('sequelize');
const { sequelize } = require('./test_sequelize')
const Car = require('./models/cars')(sequelize, Sequelize.DataTypes);
const { ping, getCars } = require('./handler');
const { getCarById, createCar, updateCar, deleteCar } = require('./middleware')

app.use(express.json());

(async () => {
  await sequelize.sync();
  console.log('Database synchronized.');
})();

// root
app.get('/', ping)

// get cars
app.get('/cars', getCars);

//get cars by id
app.get('/cars/:id', getCarById, (req, res) => {
  res.status(200).json(req.car);
});

// post new data
app.post('/cars', createCar, (req, res) => {
  res.status(201).json(req.createdCar);
});

// modify
app.put('/cars/:id', updateCar, (req, res) => {
  res.status(200).json(req.updatedCar);
});

// delete
app.delete('/cars/:id', deleteCar)

app.listen(PORT, host, () => {
  console.log(`Server is running at http://${host}:${PORT}`);
});