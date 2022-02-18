const { faker } = require('@faker-js/faker');
const bcrypt = require('bcryptjs');


for (i = 0; i < 10; i++) {
    const user = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: faker.internet.userName(),
        password: bcrypt.hashSync(faker.internet.password()),
        email: faker.internet.email(),
        profilePic: faker.image.avatar(),
        createdAt: new Date(),
        updatedAt: new Date()
    };
    // console.log(user, ",");
};
