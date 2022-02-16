const { faker } = require('@faker-js/faker');
const bcrypt = require('bcryptjs');


for (i = 0; i < 10; i++) {
    const user = {
        firstName: faker.name.firstName(), // Rowan Nikolaus
        lastName: faker.name.lastName(), // Kassandra.Haley@erich.biz
        password: bcrypt.hashSync(faker.internet.password()), // random contact card containing many properties
        email: faker.internet.email(),
        profilePic: faker.image.avatar()
    };
    console.log(user, ",")

    
    