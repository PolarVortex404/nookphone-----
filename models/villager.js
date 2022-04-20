'use strict';
const {
  Model
} = require('sequelize');
const { villager } = require('../controllers');
module.exports = (sequelize, DataTypes) => {
  class Villager extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Villager.belongsTo(models.Island, {
        foreignKey: 'islandId',
        as: 'island'
      })
    }
  }
  Villager.init({
    apiId: DataTypes.STRING,
    name: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    species: DataTypes.STRING,
    personality: DataTypes.STRING,
    islandId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Villager'
  });

  return Villager;
};