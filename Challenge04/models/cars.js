'use strict';
const { Model } = require('sequelize');
// const { v4: uuidv4 } = require('uuid');
module.exports = (sequelize, DataTypes) => {
  class Cars extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cars.init({
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
    modelName: 'Cars',
  });
  return Cars;
};