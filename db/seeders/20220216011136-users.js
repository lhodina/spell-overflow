'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    let user = {
      firstName: '',
      lastName: '',
      password: bcrypt.hashSync('pass'),
      email: '',
      profilePic: ''
    };

    let usersArr = [user];
    let i = 0;
    while (i <= 100) {
      const user = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        password: bcrypt.hashSync(faker.internet.password()),
        email: faker.internet.email(),
        profilePic: faker.image.avatar()
      };
      usersArr.push(user);
      i++;
    };
    return queryInterface.bulkInsert('Users', usersArr, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
