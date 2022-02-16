'use strict';
module.exports = (sequelize, DataTypes) => {
  const Downvote = sequelize.define('Downvote', {
    userId: DataTypes.INTEGER,
    answerId: DataTypes.INTEGER
  }, {});
  Downvote.associate = function(models) {
    // associations can be defined here
    Downvote.belongsTo( models.User, { foreignKey: "userId" })
    Downvote.belongsTo( models.Answer, { foreignKey: "answerId" })
  };
  return Downvote;
};