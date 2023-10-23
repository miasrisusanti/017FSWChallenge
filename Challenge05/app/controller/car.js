const carService = require('../services/car')

const ping = (req, res) => {
  res.status(200).json({ message: "Ping successfully" });
};

const getCars = async (req, res) => {
  try {
    const cars = await carService.getCars();
    res.json({
      status: "OK!",
      message: "Success",
      cars
    })
  } catch (error) {
    console.error(error);
    res.status(error.statusCode).json({
      status: "FAIL!",
      message: error.message
    })
  }
};

const getCarById = async (req, res) => {
  try {
    const { id } = req.params;
    const car = await carService.getCarById(id);
    
    req.car = car;
    res.json({
      status: "OK!",
      message: "Success",
      car
    })
  } catch (error) {
    console.error(error);
    res.status(error.statusCode).json({
      status: "FAIL!",
      message: error.message
    })
  }
};

const createCar = async (req, res) => {
  try {
    const carData = req.body;
    const { id: userId } = req.user;
    const car = await carService.createCar(carData, userId);
    req.createdCar = car;
    res.json({
      status: "OK!",
      message: "Success",
      car
    })
  } catch (error) {
    console.error(error);
    res.status(error.statusCode).json({
      status: "FAIL!",
      message: error.message
    })
  }
};

const updateCar = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCarData = req.body;
    const { id: userId } = req.user;
    const car = await carService.updateCarById(id, updatedCarData, userId);
    
    req.updatedCar = car;
    res.json({
      status: "OK!",
      message: "Success",
      car
    })
  } catch (error) {
    console.error(error);
    res.status(error.statusCode).json({
      status: "FAIL!",
      message: error.message
    })
  }
};

const deleteCar = async (req, res) => {
  try {
    const { id } = req.params;
    const { id: userId } = req.user;
    await carService.deleteCar(id, userId);
    
    res.json({
      status: 'OK!',
      message: 'Successfully deleted.'
    })
  } catch (error) {
    console.error(error);
    res.status(error.statusCode).json({
      status: "FAIL!",
      message: error.message
    })
  }
};

module.exports = { ping, getCars, getCarById, createCar, updateCar, deleteCar }