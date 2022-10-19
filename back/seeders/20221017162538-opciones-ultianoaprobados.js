'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('Opciones_ultiañoaprobados', [
    {
      opciones: 'Ninguno',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      opciones: 'Primero',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      opciones: 'Segundo',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      opciones: 'Tercero',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      opciones: 'Cuarto',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      opciones: 'Quinto',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      opciones: 'Sexto',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      opciones: 'Septimo',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      opciones: 'Octavo',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      opciones: 'Noveno',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      opciones: 'Educacion Especial',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      opciones: 'N/S N/R',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  down: async (queryInterface) => {
     await queryInterface.bulkDelete('Opciones_ultiañoaprobados', null, {
      truncate: true,
      cascade: false,
     });
  }
};
