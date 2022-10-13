'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('OpcionesHogares', [
    {
      opciones: 'Propietario de la vivienda y el terreno',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      opciones: 'Propietario de la vivienda solamente',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      opciones: 'Inquilino/arrendatario de la vivienda',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      opciones: 'Ocupante por pagos de impuestos/expensas',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      opciones: 'Ocupante en relacion de dependencia',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      opciones: 'Ocupante gratuito (con permiso)',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      opciones: 'Ocupante de hecho (sin permiso)',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      opciones: 'Esta en sucesion',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      opciones: 'Otra situacion',
      value: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ]),
  down: async (queryInterface) => {
     await queryInterface.bulkDelete('OpcionesHogares', null, {
      truncate: true,
      cascade: false,
     });
  }
};
