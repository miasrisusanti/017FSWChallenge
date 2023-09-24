// Challenge 3 BINAR

import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
const app = express();
const PORT = 8000;
const host = 'localhost';
const cars = './data-response/cars.json';

app.use(express.json());

const carID = {};
let filteredCars = [];
let newCars = [];

// root
app.get('/', (req, res) => {
  res.status(200).json({ message: "Ping successfully" });
});

// get cars
app.get('/cars', async (req, res) => {
  try {
    const originalDataCars = fs.readFileSync(cars);
    const dataCars = JSON.parse(originalDataCars);
    
    filteredCars = dataCars.map(({ id, image, capacity, rentPerDay, description, availableAt }) => {
      const existingID = carID[id];
      if (existingID) {
        return { id: existingID, image, capacity, rentPerDay, description, availableAt };
      } else {
        const newID = uuidv4();
        carID[id] = newID;
        return { id: newID, image, capacity, rentPerDay, description, availableAt };
      }
    });
    
    res.status(200).json([...filteredCars, ...newCars]);
  } 
  catch (error) {
    res.status(500).json({ error: 'Server error nih, benerin dulu yuk..' });
  }
});

//get cars by id
app.get('/cars/:id', (req, res) => {
  try {
    const { id } = req.params;
    const carInFilteredCars = filteredCars.find((car) => car.id === id);
    if (carInFilteredCars) {
      res.status(200).json(carInFilteredCars);
    } else {
      const carInNewCars = newCars.find((car) => car.id === id);
      if (carInNewCars) {
        res.status(200).json(carInNewCars);
      } else {
        res.status(404).json({ error: 'Waduh, mobilnya ga ada :(' });
      }
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error nih, benerin dulu yuk..' });
  }
});

// post new data
app.post('/cars', (req, res) => {
  try {
    const { image, capacity, rentPerDay, description, availableAt } = req.body;
    
    const existingCar = filteredCars.find(car => car.id === req.body.id); 
    if (existingCar) {
      return res.status(400).json({ error: 'ID mobilnya udah ada.' });
    }
    
    const createCar = {
      id: uuidv4(),
      image,
      capacity,
      rentPerDay,
      description,
      availableAt,
    };
    
    newCars.push(createCar);
    
    res.status(201).json(createCar);
  } catch (error) {
    res.status(500).json({ error: 'Server error nih, benerin dulu yuk..' });
  }
});

// modify
app.put('/cars/:id', (req, res) => {
  try {
    const { id } = req.params;
    const updatedCarData = req.body;
    
    const carIndexInFilteredCars = filteredCars.findIndex((car) => car.id === id);
    const carIndexInNewCars = newCars.findIndex((car) => car.id === id);
    
    if (carIndexInFilteredCars !== -1) {
      filteredCars[carIndexInFilteredCars] = {
        ...filteredCars[carIndexInFilteredCars],
        ...updatedCarData,
      };

      res.status(200).json(filteredCars[carIndexInFilteredCars]);
    } else if (carIndexInNewCars !== -1) {
      newCars[carIndexInNewCars] = {
        ...newCars[carIndexInNewCars],
        ...updatedCarData,
      };
      
      res.status(200).json(newCars[carIndexInNewCars]);
    } else {
      res.status(404).json({ error: 'Waduh, mobilnya ga ada :(' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error nih, benerin dulu yuk..' });
  }
});

// delete
app.delete('/cars/:id', (req, res) => {
  try {
    const { id } = req.params;
    
    const carIndexInFilteredCars = filteredCars.findIndex((car) => car.id === id);
    const carIndexInNewCars = newCars.findIndex((car) => car.id === id);
    
    if (carIndexInFilteredCars !== -1) {
      filteredCars.splice(carIndexInFilteredCars, 1);
      res.status(204).end();
    } else if (carIndexInNewCars !== -1) {
      newCars.splice(carIndexInNewCars, 1);
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Waduh, mobilnya ga ada :(' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error nih, benerin dulu yuk..' });
  }
});

app.listen(PORT, host, () => {
  console.log(`Server is running at http://${host}:${PORT}`);
});