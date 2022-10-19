'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('Opciones_coberturamedicas', [
    {
      opciones: 'Obra Social (incluye PAMI)',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      opciones: 'Mutual / Prepaga / Servicio de emegencia',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      opciones: 'Planes y Seguros publicos',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      opciones: 'No paga ni le descuentan (no tiene ninguna)',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      opciones: 'N/S N/R',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ]),
  down: async (queryInterface) => {
     await queryInterface.bulkDelete('Opciones_coberturamedicas', null, {
      truncate: true,
      cascade: false,
     });
  }
};