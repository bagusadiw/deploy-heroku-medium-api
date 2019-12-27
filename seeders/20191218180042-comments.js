'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('comments', [
      {
        idArticle : '1',
        idUser : '1',
        comment : 'hei, yang disana',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idArticle : '1',
        idUser : '1',
        comment : 'halo halo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idArticle : '2',
        idUser : '1',
        comment : 'hei, yang disana',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idArticle : '2',
        idUser : '1',
        comment : 'halo halo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idArticle : '3',
        idUser : '1',
        comment : 'hei, yang disana',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idArticle : '3',
        idUser : '1',
        comment : 'halo halo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idArticle : '4',
        idUser : '1',
        comment : 'hei, yang disana',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idArticle : '4',
        idUser : '1',
        comment : 'halo halo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idArticle : '5',
        idUser : '1',
        comment : 'hei, yang disana',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idArticle : '5',
        idUser : '1',
        comment : 'halo halo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
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
