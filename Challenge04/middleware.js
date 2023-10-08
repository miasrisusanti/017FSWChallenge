const express = require('express');
const app = express();
const { Sequelize } = require('sequelize');
const { sequelize } = require('./test_sequelize')
const Car = require('./models/cars')(sequelize, Sequelize.DataTypes);

const getCarById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const car = await Car.findByPk(id);
        
        if (car) {
            req.car = car;
            next();
        } else {
            res.status(404).json({ error: 'Waduh, mobilnya ga ada :(' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error nih, benerin dulu yuk..' });
    }
};

const createCar = async (req, res, next) => {
    try {
        const { name, type, image, capacity, rentPerDay, description, availableAt } = req.body;
        
        if (!name || !type || !image || !capacity || !rentPerDay || !description || !availableAt) {
            return res.status(400).json({ error: 'Ada yang kurang nih, cek dulu!' });
        }
        
        const car = await Car.create({
            name,
            type,
            image,
            capacity,
            rentPerDay,
            description,
            availableAt,
        });
        
        req.createdCar = car;
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error nih, benerin dulu yuk..' });
    }
};

const updateCar = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedCarData = req.body;
        const car = await Car.findByPk(id);
        
        if (!car) {
            return res.status(404).json({ error: 'Waduh, mobilnya ga ada :(' });
        }
        
        await car.update(updatedCarData);
        req.updatedCar = car;
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error nih, benerin dulu yuk..' });
    }
};

const deleteCar = async (req, res, next) => {
    try {
        const { id } = req.params;
        const car = await Car.findByPk(id);
        
        if (!car) {
            return res.status(404).json({ error: 'Waduh, mobilnya ga ada :(' });
        }
        
        await car.destroy();
        res.status(204).end();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error nih, benerin dulu yuk..' });
    }
};

module.exports = { getCarById, createCar, updateCar, deleteCar };
