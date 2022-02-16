'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await queryInterface.bulkInsert('Users', [
      {
        firstName: 'Amari',
        lastName: 'Steuber',
        username: 'Lisa.Rutherford',
        password: '$2a$10$tz4SN72mSaNG9AR0C1Qln.xdPEaNtAkXGVW0Sn938YzH9hdMZjPvu',
        email: 'Rudolph_Reynolds3@hotmail.com',
        profilePic: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/835.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Oswald',
        lastName: 'Block',
        username: 'Christian.Schaden60',
        password: '$2a$10$CvYBzfHIKdRb9tP2gBWCg.yCBkOG2CcmKN3dp9qjGi.h94/8Trfiu',
        email: 'Jamar.Shields16@gmail.com',
        profilePic: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Rebecca',
        lastName: 'Homenick',
        username: 'Sonia_Pollich46',
        password: '$2a$10$zdaKaWH8Icd31azX6snbrutU174Z7RV.0/7QMIRqLHiTIDrNqHrvi',
        email: 'Trycia.Schneider@gmail.com',
        profilePic: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/341.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Javon',
        lastName: 'Hoeger',
        username: 'Breana.Hand',
        password: '$2a$10$fhYyt8xjdt1DbXV6dyNa7ORzlS.LDVb2.SH7AUnlDl6qlbb5jhxQi',
        email: 'Cordia.Mante@hotmail.com',
        profilePic: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/753.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Arnoldo',
        lastName: 'Stamm',
        username: 'Shayne_Medhurst30',
        password: '$2a$10$a1DnYKhY00SUBxLZK6bqG.QoIk/c3A5bIYbKyyn6FsoJm/MY7QiW6',
        email: 'Cassie59@hotmail.com',
        profilePic: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/577.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Leonard',
        lastName: 'Little',
        username: 'April37',
        password: '$2a$10$elm2kWgw/Fgziefk0xOmuucvV3mNXmUOlnkh6WOGFmGVIbQGnRLqi',
        email: 'Florine39@hotmail.com',
        profilePic: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/400.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Frances',
        lastName: 'Aufderhar',
        username: 'Jett_Hackett41',
        password: '$2a$10$OIeTX0tADI87djN5V6W1Z.pmiPzBb6wpcWANoHv0/tIsP8ZHlJqwC',
        email: 'Lauriane14@yahoo.com',
        profilePic: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/82.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Ned',
        lastName: 'Schiller',
        username: 'Cheyanne.Rodriguez',
        password: '$2a$10$qaWcGzoOH3NCyukZ1ToGFu8IkVI.wiLEf05PHFKPdsPefu8JKK3a.',
        email: 'Bridie_Abernathy75@hotmail.com',
        profilePic: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/812.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Thora',
        lastName: 'Schamberger',
        username: 'Margaretta.Buckridge85',
        password: '$2a$10$E9KgnA9NLt1b56aI/FLyP.t75RtdvJzf7jqsuGVfBo9fGbRCCV20K',
        email: 'Savion_Berge48@gmail.com',
        profilePic: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1111.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Bertram',
        lastName: 'Bartell',
        username: 'Mac42',
        password: '$2a$10$rH8QoBbzvpg7CJZE7rqii.OxgQihQtJ.o60ILY2KJzQBbVuvQcL8m',
        email: 'Elyssa.Feest@yahoo.com',
        profilePic: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/707.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {
      returning: true
    });

    return queryInterface.bulkInsert('Questions', [
      {
        headline: "Where can I sell my wand?",
        content: "I am having trouble selling my wand. Someone please help.",
        picture: "",
        userId: users[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        headline: "Is necromancy legal in Nevada?",
        content: "I REALLY want to practice necromancy on my great great great great grandmother but I don't want to be a criminal.",
        picture: "",
        userId: users[1].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        headline: "how oldz due u have 2 be 2 practiz magik?",
        content: "im 9 n i wanna practiz magik. dis me in pic.",
        picture: "https://img.nbc.com/sites/nbcunbc/files/images/2021/6/22/210622_4384247_9_Year_Old_Magician_The_Amazing_Shoji_Delive.jpg",
        userId: users[2].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
    return queryInterface.bulkDelete('Questions', null, {});
  }
};
