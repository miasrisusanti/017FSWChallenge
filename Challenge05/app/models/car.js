'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Car.belongsTo(models.User, {
        foreignKey: 'createdBy',
        as: 'created'
      });

      Car.belongsTo(models.User, {
        foreignKey: 'updatedBy',
        as: 'updated'
      });


      Car.belongsTo(models.User, {
        foreignKey: 'deletedBy',
        as: 'deleted'
      });
    }
  }
  Car.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true,
    },
    name: DataTypes.STRING,
    type: DataTypes.ENUM('small', 'medium', 'large'),
    image: DataTypes.STRING,
    capacity: DataTypes.INTEGER,
    rentPerDay: DataTypes.INTEGER,
    description: DataTypes.STRING,
    availableAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Car',
    paranoid: true
  });
  return Car;
};