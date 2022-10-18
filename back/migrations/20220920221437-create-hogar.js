module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('hogars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_encuesta: {
        type: Sequelize.INTEGER,
      },
      cod_area: {
        type: Sequelize.INTEGER,
      },
      num_listado: {
        type: Sequelize.INTEGER,
      },
      fecha: {
        type: Sequelize.DATE,
      },
      num_vivienda: {
        type: Sequelize.INTEGER,
      },
      num_hogar: {
        type: Sequelize.INTEGER,
      },
      tipo_de_encuesta: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('hogars');
  },
};
