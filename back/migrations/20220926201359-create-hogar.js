'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Hogares', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_encuestas: {
        type: Sequelize.INTEGER
      },
      amb_excl_trabajo: {
        type: Sequelize.BOOLEAN
      },
      amb_excl_trabajo_c: {
        type: Sequelize.INTEGER
      },
      tiene_ademas_cocina: {
        type: Sequelize.BOOLEAN
      },
      tiene_ademas_lavadero: {
        type: Sequelize.BOOLEAN
      },
      tiene_ademas_garage: {
        type: Sequelize.BOOLEAN
      },
      tiene_ademas_dormir: {
        type: Sequelize.BOOLEAN
      },
      tiene_ademas_dormir_c: {
        type: Sequelize.INTEGER
      },
      tiene_ademas_trabaj: {
        type: Sequelize.BOOLEAN
      },
      tiene_ademas_trabaj_c: {
        type: Sequelize.INTEGER
      },
      este_hogar_es: {
        type: Sequelize.INTEGER
      },
      cocinar_pref: {
        type: Sequelize.INTEGER
      },
      baño_tipo: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Hogares');
  }
};