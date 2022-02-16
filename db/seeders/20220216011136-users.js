'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    let demoUser = {
      firstName: '',
      lastName: '',
      hashedPassword: bcrypt.hashSync('pass'),
      email: '',
      profilePic: ''
    };

    let usersArr = [demoUser];
    let i = 0;
    while (i <= 100) {
      const user = {
        firstName: faker.name.firstName(), // Rowan Nikolaus
        lastName: faker.name.lastName(), // Kassandra.Haley@erich.biz
        password: bcrypt.hashSync(faker.internet.password()), // random contact card containing many properties
        email: faker.internet.email(),
        profilePic: faker.image.avatar()
      };

      usersArr.push(user);
      i++;
    };

    return queryInterface.bulkInsert('Users', usersArr, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Users', null, {});
  }
};