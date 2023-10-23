'use strict';

/** @type {import('sequelize-cli').Migration} */
const { v4: uuidv4 } = require('uuid');
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Cars', [{
      id: uuidv4(),
      name: 'Ford F150',
      type: 'large',
      image: 'https://cdn.motor1.com/images/mgl/WpjRL/s1/2021-ford-f-150.jpg',
      capacity: 2,
      rentPerDay: 200000,
      description: "The most popular variant of the F-Series.",
      availableAt: "2022-03-23T15:49:05.563Z",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: uuidv4(),
      name: 'Toyota Camry',
      type: 'medium',
      image: 'https://imgcdnblog.carbay.com/wp-content/uploads/2020/07/17134453/Toyota-Camry-2021-1024-06.jpg',
      capacity: 4,
      rentPerDay: 180000,
      description: 'A reliable midsize sedan.',
      availableAt: '2022-04-15T10:30:00.000Z',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Cars', null, {});
  }
};
