'use strict';

module.exports = {
//Ejecucion al hacer la siembra
  up: async (queryInterface) => queryInterface.bulkInsert('Modelos', [
      {
        firstName: 'Francisco',
        lastName: 'Quinteros',
        email: 'qfran@hotmail.com',
        rol: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Alfonso',
        lastName: 'Quiroga',
        email: 'qAlf@gmail.com',
        rol: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Nahuel',
        lastName: 'Romagnoli',
        email: 'Romauel@hotmail.com',
        rol: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Leticia',
        lastName: 'Savignon',
        email: 'SaviLe@hotmail.com',
        rol: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Agostina',
        lastName: 'Dozel',
        email: 'AgosDo@hotmail.com',
        rol: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
     ]),
//Ejecucion al borrar la siembra
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Modelos', null, {
      truncate: true,
      cascade: false,
    });
  }
};
