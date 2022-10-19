'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('Opciones_nivelcursados', [
    {
      opciones: 'Jardin/Preesc',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      opciones: 'Primario',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      opciones: 'EGB',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      opciones: 'Secundario',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      opciones: 'Polimodal',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      opciones: 'Terciario',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      opciones: 'Universitario',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      opciones: 'Posgrado',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      opciones: 'Educacion Especial (discapacidad)',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  down: async (queryInterface) => {
     await queryInterface.bulkDelete('Opciones_nivelcursados', null, {
      truncate: true,
      cascade: false,
     });
  }
};