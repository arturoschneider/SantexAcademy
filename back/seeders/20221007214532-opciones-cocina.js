'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('OpcionesCocinas', [
    {
      opciones: 'Gas de red',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      opciones: 'Gas de tubo/garrafa',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      opciones: 'Kerosene/leña/carbon',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      opciones: 'Otro',
      value: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  down: async (queryInterface) => {
     await queryInterface.bulkDelete('OpcionesCocinas', null, {
      truncate: true,
      cascade: false,
     });
  }
};
