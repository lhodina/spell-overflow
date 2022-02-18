'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await queryInterface.bulkInsert('Users', [
      {
        firstName: 'Chris',
        lastName: 'Tsang',
        username: 'tsangerine',
        password: '$2a$10$CvYBzfHIKdRb9tP2gBWCg.yCBkOG2CcmKN3dp9qjGi.h94/8Trfiu',
        email: 'tsangerine@gmail.com',
        profilePic: 'https://img.thrfun.com/img/205/886/tangerine_x1.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Luke',
        lastName: 'Hodina',
        username: 'lukeypookey',
        password: '$2a$10$zdaKaWH8Icd31azX6snbrutU174Z7RV.0/7QMIRqLHiTIDrNqHrvi',
        email: 'lukeh@gmail.com',
        profilePic: 'https://upload.wikimedia.org/wikipedia/en/a/af/Threat-Level-Midnight.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Stan',
        lastName: 'Yee',
        username: 'yeeee',
        password: '$2a$10$fhYyt8xjdt1DbXV6dyNa7ORzlS.LDVb2.SH7AUnlDl6qlbb5jhxQi',
        email: 'stany@hotmail.com',
        profilePic: 'https://images.thdstatic.com/productImages/48730d37-9cdd-4a27-a2ae-5fb029e64d8a/svn/wintergreen-lighting-christmas-novelty-lights-76498-64_600.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Jason',
        lastName: 'Li',
        username: 'jongy',
        password: '$2a$10$a1DnYKhY00SUBxLZK6bqG.QoIk/c3A5bIYbKyyn6FsoJm/MY7QiW6',
        email: 'jongy@hotmail.com',
        profilePic: 'https://i.redd.it/2t2iaavk0sy71.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Gustav',
        lastName: 'Cauldronburgen',
        username: 'gcauldronburgen',
        password: 'swellsp3ll',
        email: 'gcauld666@germanmail.de',
        profilePic: 'https://res.cloudinary.com/sagacity/image/upload/c_crop,h_799,w_531,x_0,y_0/c_scale,w_640/v1397351962/sausasge_em9ujo.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Kanye',
        lastName: 'West',
        username: 'iluvher22',
        password: '$2a$10$tz4SN72mSaNG9AR0C1Qln.xdPEaNtAkXGVW0Sn938YzH9hdMZjPvu',
        email: 'kanyewest@gmail.com',
        profilePic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Kanye_West_at_the_2009_Tribeca_Film_Festival_%28cropped%29.jpg/800px-Kanye_West_at_the_2009_Tribeca_Film_Festival_%28cropped%29.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Pierre',
        lastName: 'Diabolique',
        username: 'leWizzard',
        password: 'tresEvil9',
        email: 'pdwizz@yahue.fr',
        profilePic: 'https://cdn.weasyl.com/static/media/04/1c/16/041c163c3dc056ba412baa573dba00aa3d46c2b4f79b69cd63e37d871f34f580.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Buster',
        lastName: 'Hayseed',
        username: 'haybuster',
        password: 'awshucks124',
        email: 'bhayseed@freedomeagle.biz',
        profilePic: 'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/9550562/original/c99412a8a7706d2815520b754fedabe54025657f/record-a-southern-accent-hillbilly-or-redneck-voice.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Beatrice',
        lastName: 'Blackwood',
        username: 'matriarchEnemy',
        password: 'destr0y!',
        email: 'bblackwood@gmail.com',
        profilePic: 'https://live.staticflickr.com/5022/5661927709_7907d2dbf0_b.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Fizzlethwait',
        lastName: 'Fitzgibbons',
        username: 'ohIdareSay',
        password: 'fancyfe!!ow',
        email: 'fizzfitz@prestige.com',
        profilePic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Montesquiou%2C_Robert_de_-_Boldini.jpg/170px-Montesquiou%2C_Robert_de_-_Boldini.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'demo',
        lastName: 'demo',
        username: 'demo',
        password: '$2a$10$uU4ko.E2NK5uppml5.9HRey.yZ/9rBtP1/2bF8G5mHnOIUkiyhSjO',
        email: 'demo@demo.com',
        profilePic: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/707.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {
      returning: true
    });

    return queryInterface.bulkInsert('Questions', [
      {
        headline: "how do i turn my gold nuggets into tangerines?",
        content: "any alchemist on this site? i want to turn my gold nuggest into tangerines. i have way too many gold nuggets.",
        picture: "",
        userId: users[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        headline: "Any recommendations for cauldrons?",
        content: "I have a 2 gallon cauldron at home that I use to make concoctions but I want at least a 10 gallon one. Anyone know a place?",
        picture: "",
        userId: users[1].id,
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
        headline: "Where to learn magic?",
        content: "Hi everyone. I'm new to learning magic and I'm unsure of where to start. Does anyone have any tip/advice?",
        picture: "",
        userId: users[2].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        headline: "Anyone else have back pain??",
        content: "hey everyone. ive been getting into magic lately and ive been practicing a lot of it on my free time. i really enjoy magic but its making my back hurt. any tips?",
        picture: "",
        userId: users[3].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        headline: "how oldz due u have 2 be 2 practiz magik?",
        content: "im 9 n i wanna practiz magik. dis me in pic.",
        picture: "https://img.nbc.com/sites/nbcunbc/files/images/2021/6/22/210622_4384247_9_Year_Old_Magician_The_Amazing_Shoji_Delive.jpg",
        userId: users[4].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        headline: "how do i make her come back to me?",
        content: "i miss her.. is there a love potion i can make?",
        picture: "",
        userId: users[5].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        headline: "how oldz due u have 2 be 2 practiz magik?",
        content: "im 9 n i wanna practiz magik. dis me in pic.",
        picture: "https://img.nbc.com/sites/nbcunbc/files/images/2021/6/22/210622_4384247_9_Year_Old_Magician_The_Amazing_Shoji_Delive.jpg",
        userId: users[6].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        headline: "how i stop wet bed?",
        content: "im 9 n i dont wanna wet bed any more :(",
        picture: "",
        userId: users[6].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        headline: "how oldz due u have 2 be 2 practiz magik?",
        content: "im 9 n i wanna practiz magik. dis me in pic.",
        picture: "https://img.nbc.com/sites/nbcunbc/files/images/2021/6/22/210622_4384247_9_Year_Old_Magician_The_Amazing_Shoji_Delive.jpg",
        userId: users[7].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        headline: "how oldz due u have 2 be 2 practiz magik?",
        content: "im 9 n i wanna practiz magik. dis me in pic.",
        picture: "https://img.nbc.com/sites/nbcunbc/files/images/2021/6/22/210622_4384247_9_Year_Old_Magician_The_Amazing_Shoji_Delive.jpg",
        userId: users[8].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        headline: "how oldz due u have 2 be 2 practiz magik?",
        content: "im 9 n i wanna practiz magik. dis me in pic.",
        picture: "https://img.nbc.com/sites/nbcunbc/files/images/2021/6/22/210622_4384247_9_Year_Old_Magician_The_Amazing_Shoji_Delive.jpg",
        userId: users[9].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        headline: "how oldz due u have 2 be 2 practiz magik?",
        content: "im 9 n i wanna practiz magik. dis me in pic.",
        picture: "https://img.nbc.com/sites/nbcunbc/files/images/2021/6/22/210622_4384247_9_Year_Old_Magician_The_Amazing_Shoji_Delive.jpg",
        userId: users[9].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        headline: "how oldz due u have 2 be 2 practiz magik?",
        content: "im 9 n i wanna practiz magik. dis me in pic.",
        picture: "https://img.nbc.com/sites/nbcunbc/files/images/2021/6/22/210622_4384247_9_Year_Old_Magician_The_Amazing_Shoji_Delive.jpg",
        userId: users[9].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        headline: "how do i make my fridge cold?",
        content: "everyone's fridge is cold?? do i have to make a cold potion for my fridge?",
        picture: "https://img.nbc.com/sites/nbcunbc/files/images/2021/6/22/210622_4384247_9_Year_Old_Magician_The_Amazing_Shoji_Delive.jpg",
        userId: users[10].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Questions', null, {});
    return queryInterface.bulkDelete('Users', null, {});
  }
};
