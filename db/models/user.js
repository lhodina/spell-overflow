'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    username: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    profilePic: { type: DataTypes.STRING }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany( models.Question, { foreignKey: "userId" })
    User.hasMany( models.Answer, { foreignKey: "userId" })
    User.hasMany( models.Upvote, { foreignKey: "userId" })
    User.hasMany( models.Downvote, { foreignKey: "userId" })
  };
  return User;
};
