'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('Opciones_dondevivia5años', [
    {
      opciones: 'En esta localidad',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      opciones: 'En otra localidad de esta provincia (especificar)',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      opciones: 'En otra provincia (especificar)',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      opciones: 'En un pais limitrofe (especificar)',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      opciones: 'En otro pais (especificar)',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      opciones: 'No habia nacido',
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
     await queryInterface.bulkDelete('Opciones_dondevivia5años', null, {
      truncate: true,
      cascade: false,
     });
  }
};
