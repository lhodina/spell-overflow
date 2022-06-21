'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
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
