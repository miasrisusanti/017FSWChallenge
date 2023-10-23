'use strict';

/** @type {import('sequelize-cli').Migration} */
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt')
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      id: uuidv4(),
      name: "Mia",
      email: "superadmin@gmail.com",
      encryptedPassword: bcrypt.hashSync('superadmin', 10),
      phoneNumber:"12314141",
      address: "Tangsel",
      roles: "SUPERADMIN",
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
