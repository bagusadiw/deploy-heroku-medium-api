'use strict';
module.exports = (sequelize, DataTypes) => {
  const follow = sequelize.define('follow', {
    idUser: DataTypes.INTEGER,
    followingIdUser: DataTypes.INTEGER
  }, {});
  follow.associate = function(models) {
    // associations can be defined here
    follow.belongsTo(models.users, {
      as: 'userFollow',
      foreignKey: 'idUser'
    })
    follow.belongsTo(models.users, {
      as: 'followedUser',
      foreignKey: 'followingIdUser'
    })
  };
  return follow;
};