'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('Encuestas', [
    {
      user_id: 1,
      cod_area: 56,
      num_listado: 68,
      fecha: new Date(),
      num_vivienda: 796,
      num_hogar: 122,
      tipo_de_encuesta: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 2,
      cod_area: 58,
      num_listado: 28,
      fecha: new Date(),
      num_vivienda: 996,
      num_hogar: 422,
      tipo_de_encuesta: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 3,
      cod_area: 26,
      num_listado: 79,
      fecha: new Date(),
      num_vivienda: 32,
      num_hogar: 100,
      tipo_de_encuesta: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 2,
      cod_area: 45,
      num_listado: 56,
      fecha: new Date(),
      num_vivienda: 778,
      num_hogar: 10,
      tipo_de_encuesta: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  down: async (queryInterface) => {
     await queryInterface.bulkDelete('Encuestas', null, {
      truncate: true,
      cascade: false,
     });
  }
};
