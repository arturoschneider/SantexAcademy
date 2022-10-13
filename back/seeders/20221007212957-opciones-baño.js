'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('OpcionesBaños', [
    {
      opciones: 'Uso exclusivo del hogar',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      opciones: 'Compartido con otros/s hogar/es de la misma vivienda',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      opciones: 'Compartido con otra/s vivienda/s',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      opciones: 'No tiene baño',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  down: async (queryInterface) => {
     await queryInterface.bulkDelete('OpcionesBaños', null, {
      truncate: true,
      cascade: false,
     });
  }
};
