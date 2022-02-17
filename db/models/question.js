'use strict';
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    headline: DataTypes.TEXT,
    content: DataTypes.TEXT,
    picture: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Question.associate = function(models) {
    // // associations can be defined here
    Question.belongsTo( models.User, { foreignKey: "userId" })
    Question.hasMany( models.Answer, { foreignKey: "questionId" })
    Question.hasMany( models.questionTag, { foreignKey: "questionId" })
  };
  return Question;
};
