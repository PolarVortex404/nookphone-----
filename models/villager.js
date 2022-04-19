'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Villager extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Villager.init({
    apiId: DataTypes.STRING,
    name: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    species: DataTypes.STRING,
    personality: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Villager',
  });
  return Villager;
};