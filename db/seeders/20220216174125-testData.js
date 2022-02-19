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
        headline: "My wife gets mad when I borrow her wand without asking. AITA?",
        content: "My wife asks me to keep my wand on the other side of the room at night because sometimes it makes unexplained noises. So sometimes I use hers cause I need to warm up my midnight snack.",
        picture: "https://mediaproxy.salon.com/width/1200/https://media.salon.com/2011/01/fat_man_a_cautionary_tale.jpg",
        userId: users[7].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        headline: "Best gear to get my 13 Y.O. for setting up her first alchemy lab??",
        content: "I'm trying to select the right glass, flasks, beakers, potions satchel, etc., and looking for alternatives to just buying a generic starter kit from Bartlebie's Elixer's",
        picture: "https://i.pinimg.com/originals/66/e6/f5/66e6f5dadd22eafc07c3ecd63ec31d40.jpg",
        userId: users[8].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        headline: "How to set up voodoo doll to teach my busness rival lesson?!",
        content: "My busness rival very bad man giving bad service to customer. I try to link my doll to him to teach him lesson. What is best technic plz?",
        picture: "https://cdn.dribbble.com/users/1779070/screenshots/3953423/media/74924207b3cd4b6ed618c7f8dbe35259.jpg?compress=1&resize=400x300",
        userId: users[9].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        headline: "Most potent healing ingredients I can forage for in the Dallas/Fort Worth area?",
        content: "I'm starting my own line of healing potions in Texas, and I was just wondering if y'all could point me to a map or other resources for sagewood, angel's breath, goldenroot, etc?",
        picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkJ0GxOAViX0doMP__n97GCE8vsgKcEna1Xw&usqp=CAU",
        userId: users[9].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        headline: "Can you use an ancient sword enchantment on gardening tools?",
        content: "I'm looking to apply the same enchantment typically used for increasing damage on a Jarl's broadsword to my rake, sheers, and gardening fork. Anyone have experience with this?",
        picture: "https://i.pinimg.com/200x/dd/81/8e/dd818e47317ce6983851c89a648f49b1.jpg",
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
