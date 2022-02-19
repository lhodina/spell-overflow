'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Answers', [
      {
        content: "Man why would you turn gold into tangerines? Give the gold to me you fool",
        picture: "",
        userId: 2,
        questionId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "i do what i want with my gold you nerd",
        picture: "",
        userId: 1,
        questionId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "FIRST HAHAHA",
        picture: "",
        userId: 3,
        questionId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "... bro",
        picture: "",
        userId: 4,
        questionId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "Anyone?",
        picture: "",
        userId: 3,
        questionId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "just get a better back",
        picture: "",
        userId: 1,
        questionId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "My dear sir, may I first of all congratulate you on your foray into the dark arts! Might I recommend the backward recitation of the name of your opponent's most cherished loved one?",
        picture: "",
        userId: 11,
        questionId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "Go on, girl! DFW isn't great for traditional Elvish recipes due to climate, but my BF and I started a side business focused on grounding powders. Good luck!",
        picture: "",
        userId: 8,
        questionId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "Healing potions are unethical.",
        picture: "",
        userId: 7,
        questionId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "This ain't a answer, per say, to your question, per say, but oncet my uncle used to use command animal on his John Deere. Had the best lawn in the county.",
        picture: "",
        userId: 9,
        questionId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "If you get a newer arcane enchanter, you can use the same spell on most of your tools, as long as you also have a decent crystal.",
        picture: "https://i.etsystatic.com/13564223/d/il/a7dda5/3078743445/il_340x270.3078743445_p2ay.jpg?version=0",
        userId: 5,
        questionId: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "u a dumbo?",
        picture: "",
        userId: 7,
        questionId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Answers', null, {});
  }
};
