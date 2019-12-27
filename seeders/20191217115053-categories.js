'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('categories', [
      {
        name: 'Home',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Onezero',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Elemental',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Gen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Zora',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Forge',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Human Parts',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Marker',
        createdAt: new Date(),
        updatedAt: new Date()
      }      
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
