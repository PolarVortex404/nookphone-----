'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   //updates database
     await queryInterface.bulkInsert('Villagers', [{
         apiId: 'flg01',
         name: 'Ribbot',
         species: 'Frog',
         imageUrl: 'https://dodo.ac/np/images/9/94/Ribbot_NH.png',
         personality:'Jock',
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {apiId: 'brd09',
        name: 'Ace',
        species: 'Bird',
        imageUrl: 'https://dodo.ac/np/images/9/91/Ace_amiibo.png',
        personality:'Jock',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
       {apiId: 'brd06',
        name: 'Admiral',
        species: 'Bird',
        imageUrl: 'https://dodo.ac/np/images/e/ed/Admiral_NH.png',
        personality:'Cranky',
        createdAt: new Date(), 
        updatedAt: new Date(),
      }], {});
  },
//function defines how to undo changes from above, if necessary
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Villagers', null, {});
  }
};
