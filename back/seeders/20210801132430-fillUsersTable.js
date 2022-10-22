/* cSpell: disable */
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('users', [
    {
      username: 'example1',
      password: await bcrypt.hash('secret', 10),
      name: 'Francisco',
      lastname: 'Vaca',
      email: 'example1@hotmail.com',
      phone_number: '3514689203',
      rol: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: 'example2',
      password: await bcrypt.hash('secret2', 10),
      name: 'Pablo',
      lastname: 'Dozel',
      email: 'example2@hotmail.com',
      phone_number: '36541809',
      rol: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: 'example3',
      password: await bcrypt.hash('secret3', 10),
      name: 'Alejandra',
      lastname: 'Pereyra',
      email: 'example3@gmail.com',
      phone_number: '5489205642',
      rol: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: 'example4',
      password: await bcrypt.hash('secret4', 10),
      name: 'Cecilia',
      lastname: 'Cortez',
      email: 'example4@gmail.com',
      phone_number: '354203789',
      rol: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: 'example5',
      password: await bcrypt.hash('secret5', 10),
      name: 'Agostina',
      lastname: 'Odierna',
      email: 'exaple5@hotmail.com',
      phone_number: '5789203654',
      rol: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {
      truncate: true,
      cascade: false,
    });
  },
};
