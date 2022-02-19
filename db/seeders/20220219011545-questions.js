'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Questions', [
      {
        headline: "how do i turn my gold nuggets into tangerines?",
        content: "any alchemist on this site? i want to turn my gold nuggest into tangerines. i have way too many gold nuggets.",
        picture: "",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        headline: "Any recommendations for cauldrons?",
        content: "I have a 2 gallon cauldron at home that I use to make concoctions but I want at least a 10 gallon one. Anyone know a place?",
        picture: "",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        headline: "Is necromancy legal in Nevada?",
        content: "I REALLY want to practice necromancy on my great great great great grandmother but I don't want to be a criminal.",
        picture: "",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        headline: "Where to learn magic?",
        content: "Hi everyone. I'm new to learning magic and I'm unsure of where to start. Does anyone have any tip/advice?",
        picture: "",
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        headline: "Anyone else have back pain??",
        content: "hey everyone. ive been getting into magic lately and ive been practicing a lot of it on my free time. i really enjoy magic but its making my back hurt. any tips?",
        picture: "",
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        headline: "help",
        content: "help me....",
        picture: "",
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        headline: "how do i make her come back to me?",
        content: "i miss her.. is there a love potion i can make?",
        picture: "",
        userId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        headline: "how oldz due u have 2 be 2 practiz magik?",
        content: "im 9 n i wanna practiz magik. dis me in pic.",
        picture: "https://img.nbc.com/sites/nbcunbc/files/images/2021/6/22/210622_4384247_9_Year_Old_Magician_The_Amazing_Shoji_Delive.jpg",
        userId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        headline: "how i stop wet bed?",
        content: "im 9 n i dont wanna wet bed any more :(",
        picture: "",
        userId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        headline: "My wife gets mad when I borrow her wand without asking. AITA?",
        content: "My wife asks me to keep my wand on the other side of the room at night because sometimes it makes unexplained noises. So sometimes I use hers cause I need to warm up my midnight snack.",
        picture: "https://mediaproxy.salon.com/width/1200/https://media.salon.com/2011/01/fat_man_a_cautionary_tale.jpg",
        userId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        headline: "Best gear to get my 13 Y.O. for setting up her first alchemy lab??",
        content: "I'm trying to select the right glass, flasks, beakers, potions satchel, etc., and looking for alternatives to just buying a generic starter kit from Bartlebie's Elixer's",
        picture: "",
        userId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        headline: "How to set up voodoo doll to teach my busness rival lesson?!",
        content: "My busness rival very bad man giving bad service to customer. I try to link my doll to him to teach him lesson. What is best technic plz?",
        picture: "https://cdn.dribbble.com/users/1779070/screenshots/3953423/media/74924207b3cd4b6ed618c7f8dbe35259.jpg?compress=1&resize=400x300",
        userId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        headline: "Most potent healing ingredients I can forage for in the Dallas/Fort Worth area?",
        content: "I'm starting my own line of healing potions in Texas, and I was just wondering if y'all could point me to a map or other resources for sagewood, angel's breath, goldenroot, etc?",
        picture: "",
        userId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        headline: "Can you use an ancient sword enchantment on gardening tools?",
        content: "I'm looking to apply the same enchantment typically used for increasing damage on a Jarl's broadsword to my rake, sheers, and gardening fork. Anyone have experience with this?",
        picture: "",
        userId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        headline: "how do i make my fridge cold?",
        content: "everyone's fridge is cold?? do i have to make a cold potion for my fridge?",
        picture: "",
        userId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Questions', null, {});
  }
};
