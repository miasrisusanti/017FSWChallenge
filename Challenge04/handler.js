const express = require('express');
const app = express();
const { Sequelize } = require('sequelize');
const { sequelize } = require('./test_sequelize')
const Car = require('./models/cars')(sequelize, Sequelize.DataTypes);

const ping = (req, res) => {
  res.status(200).json({ message: "Ping successfully" });
};

const getCars = async (req, res) => {
  try {
    const cars = await Car.findAll();
    res.status(200).json(cars);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error nih, benerin dulu yuk..' });
  }
};

module.exports = { ping, getCars }