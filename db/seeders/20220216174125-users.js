'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
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
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
