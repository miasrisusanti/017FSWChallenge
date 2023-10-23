'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Car, {
        foreignKey: 'createdBy',
        as: 'created'
      });
    
      User.hasMany(models.Car, {
        foreignKey: 'updatedBy',
        as: 'updated'
      });
    
      User.hasMany(models.Car, {
        foreignKey: 'deletedBy',
        as: 'deleted'
      });
    }
  }
  User.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true,
    },
    name: DataTypes.STRING,
    email: {
      allowNull: false,
      type:DataTypes.STRING,
      unique:true
    },
    encryptedPassword: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: DataTypes.STRING,
    address: DataTypes.STRING,
    roles: {
      type: DataTypes.ENUM('SUPERADMIN', 'ADMIN', 'MEMBER'),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};