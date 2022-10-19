'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('Opciones_sitconyugales', [
    {
      opciones: 'Unida/a',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      opciones: 'Casada/o',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      opciones: 'Separado/a o divorciada/o',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      opciones: 'Viuda/o',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      opciones: 'Soltera/o',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  down: async (queryInterface) => {
     await queryInterface.bulkDelete('Opciones_sitconyugales', null, {
      truncate: true,
      cascade: false,
     });
  }
};
