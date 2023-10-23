'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.addColumn('Cars', 'createdBy', {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: '7435933c-78e6-48e4-b407-d6f73b109a4c',
        references: {
          model: 'Users',
          key: 'id'
        }
      })
      
      await queryInterface.addColumn('Cars', 'updatedBy', {
        type: Sequelize.UUID,
        references: {
          model: 'Users',
          key: 'id'
        }
      })
      
      await queryInterface.addColumn('Cars', 'deletedBy', {
        type: Sequelize.UUID,
        references: {
          model: 'Users',
          key: 'id'
        }
      })
    },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Cars', 'createdBy');
    await queryInterface.removeColumn('Cars', 'updatedBy');
    await queryInterface.removeColumn('Cars', 'deletedBy')
  }
};
