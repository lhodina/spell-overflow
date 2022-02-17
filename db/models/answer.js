'use strict';
module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
    content: DataTypes.TEXT,
    picture: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    questionId: DataTypes.INTEGER
  }, {});
  Answer.associate = function(models) {
    // associations can be defined here
    Answer.belongsTo( models.Question, { foreignKey: "questionId" })
    Answer.belongsTo( models.User, { foreignKey: "userId" })
    Answer.hasMany( models.Upvote, { foreignKey: "answerId" })
    Answer.hasMany( models.Downvote, { foreignKey: "answerId" })
  };
  return Answer;
};
