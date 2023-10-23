'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'roles', {
      type: Sequelize.ENUM('SUPERADMIN', 'ADMIN', 'MEMBER'),
      allowNull: false,
      defaultValue: 'MEMBER'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'roles')
  }
};
