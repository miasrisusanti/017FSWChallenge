const { Car, User } = require('../models');
const car = require('../models/car');

exports.getCarsList = () => {
    return Car.findAll({ include: [
        { 
            model: User,
            as: 'created' 
        },
        {
            model: User,
            as: 'updated'
        },
        {
            model: User,
            as: 'deleted'
        }],
        attributes: ({ exclude: ['createdBy', 'updatedBy', 'deletedBy']})
    });
}

exports.getCarsEachById = (id) => {
    return Car.findByPk(id, { include: [
        { 
            model: User,
            as: 'created' 
        },
        {
            model: User,
            as: 'updated'
        },
        {
            model: User,
            as: 'deleted'
        }],
        attributes: ({ exclude: ['createdBy', 'updatedBy', 'deletedBy']})
    });
}

exports.createCar = (carData, userId) => {
    const { name, type, image, capacity, rentPerDay, description, availableAt } = carData;
    if (!name || !type || !image || !capacity || !rentPerDay || !description || !availableAt) {
        throw new Error('Ada yang kurang nih, cek dulu!');
    }
    
    return Car.create({
        name: carData.name,
        type: carData.type,
        image: carData.image,
        capacity: carData.capacity,
        rentPerDay: carData.rentPerDay,
        description: carData.description,
        availableAt: carData.availableAt,
        createdBy: userId
    });
}

exports.updateCar = (id, carData, userId) => {
    return Car.update({...carData, updatedBy: userId}, {where: {id}, returning: true, paranoid: false})
}

exports.deleteCar = (id) => {
    return Car.destroy({where: {id}})
}