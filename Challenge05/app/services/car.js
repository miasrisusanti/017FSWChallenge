const carRepository = require('../repository/car')
const ApplicationError = require('../../config/error/ApplicationError');
const user = require('../models/user');

async function getCars() {
  try {
    const cars = await carRepository.getCarsList();
    return cars;
  } catch (error) {
    console.error(error);
    throw new ApplicationError(`Failed to get car list: ${error.message}`, 500)
  }
}

async function getCarById(id) {
  try {
    const cars = await carRepository.getCarsEachById(id);
    if (!cars) {
      throw new ApplicationError(`Failed to find car: ${error.message}`, 404)
    }
    return cars;
  } catch (error) {
    console.error(error);
    throw new ApplicationError(`Failed to get car by ID: ${error.message}`, 404)
  }
}

async function createCar(carData, userId) {
  try {
    const car = await carRepository.createCar(carData, userId);
    return car;
  } catch (error) {
    console.error(error);
    throw new ApplicationError(`Failed to create car: ${error.message}`, 500)
  }
}

async function updateCarById(id, updatedCarData, userId) {
  try {
    const [_, data] = await carRepository.updateCar(id, updatedCarData, userId)
    return data;
  } catch (error) {
    console.error(error);
    throw new ApplicationError(`Failed to update car: ${error.message}`, 500)
  }
}

async function deleteCar(id, userId) {
  try {
    await carRepository.deleteCar(id);
    return carRepository.updateCar(id, {deletedBy: userId}, userId)
  } catch (error) {
    console.error(error);
    throw new ApplicationError(`Failed to delete car: ${error.message}`, 500)
  }
}

module.exports = { getCars, getCarById, createCar, updateCarById, deleteCar };