'use strict';
module.exports = (sequelize, DataTypes) => {
  const articles = sequelize.define('articles', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    image: DataTypes.STRING,
    idCategory: DataTypes.INTEGER,
    idUser: DataTypes.INTEGER
  }, {});
  articles.associate = function(models) {
    // associations can be defined here
    articles.belongsTo(models.categories, {
      as: 'articleCategories',
      foreignKey: 'idCategory'
    })
    articles.belongsTo(models.users, {
      as: 'articleAuthor',
      foreignKey: 'idUser'
    })
    articles.hasMany(models.comments, {
      as: 'articleComments',
      foreignKey: 'idArticle'
    })
  };
  return articles;
};