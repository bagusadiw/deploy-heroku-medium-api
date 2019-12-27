'use strict';
module.exports = (sequelize, DataTypes) => {
  const comments = sequelize.define('comments', {
    idArticle: DataTypes.INTEGER,
    idUser: DataTypes.INTEGER,
    comment: DataTypes.TEXT
  }, {});
  comments.associate = function(models) {
    // associations can be defined here
    comments.belongsTo(models.articles, {
      as: 'commentsArticle',
      foreignKey: 'idArticle'
    })
    comments.belongsTo(models.users, {
    	as: 'commentsAuthor',
    	foreignKey: 'idUser'
    })
  };
  return comments;
};