module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('encuestas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_encuesta: {
        type: Sequelize.NUMBER,
      },
      cod_area: {
        type: Sequelize.NUMBER,
      },
      num_listado: {
        type: Sequelize.NUMBER,
      },
      fecha: {
        type: Sequelize.DATE,
      },
      num_vivienda: {
        type: Sequelize.NUMBER,
      },
      num_hogar: {
        type: Sequelize.NUMBER,
      },
      tipo_de_encuesta: {
        type: Sequelize.NUMBER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('encuestas');
  },
};
