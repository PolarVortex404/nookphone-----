// 'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn( //primary key of the island table is the foreign key of the villager table
      'Villagers',
      'islandId',
      {
        type: Sequelize.DataTypes.INTEGER,
        references: { model: 'Islands', key: 'id' } 
      }
    )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    //  await queryInterface.dropTable('Villagers');
  }
};
