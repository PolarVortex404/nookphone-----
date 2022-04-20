'use strict';
const {
  Model
} = require('sequelize');
const { island } = require('../controllers');
module.exports = (sequelize, DataTypes) => {
  class Island extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Island.hasMany(models.Villager, {
        foreignKey: 'islandId',
        as: 'villagers'
      }) // define association here
    }
  }

  Island.init({
    islandName: DataTypes.STRING,
    islandOwner: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Island',
  });
  
  return Island;
};