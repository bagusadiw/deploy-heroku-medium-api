'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('categories', [
      {
        name: 'Home',
        url: '/',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Onezero',
        url: '/category',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Elemental',
        url:'/article',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Gen',
        url: '/',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Zora',
        url: '/category',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Forge',
        url:'/article',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Human Parts',
        url: '/',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Marker',
        url:'/category',
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
