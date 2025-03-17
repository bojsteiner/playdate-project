'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Park extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Park.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    enclosed: DataTypes.BOOLEAN,
    bathrooms: DataTypes.BOOLEAN,
    shade: DataTypes.STRING,
    parking: DataTypes.STRING,
    youngKidsArea: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Park',
    tableName: "Parks" 
  });
  return Park;
};