'use strict';
module.exports = (sequelize, DataTypes) => {
  const questionTag = sequelize.define('questionTag', {
    questionId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {});
  questionTag.associate = function(models) {
    // associations can be defined here
    questionTag.belongsTo( models.Question, { foreignKey: "questionId" })
    questionTag.belongsTo( models.Tag, { foreignKey: "tagId" })
  };
  return questionTag;
};
