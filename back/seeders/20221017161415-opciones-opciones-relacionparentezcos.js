'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('Opciones_relacionparentezcos', [
    {
      opciones: 'Jefa/e',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      opciones: 'Conyuge/Pareja',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      opciones: 'Hijo/a Hijastro/a',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      opciones: 'Madre/Padre',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      opciones: 'Suegra/o',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      opciones: 'Hermana/o',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      opciones: 'Otros Familiares',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      opciones: 'No Familiares',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ]),
  down: async (queryInterface) => {
     await queryInterface.bulkDelete('Opciones_relacionparentezcos', null, {
      truncate: true,
      cascade: false,
     });
  }
};