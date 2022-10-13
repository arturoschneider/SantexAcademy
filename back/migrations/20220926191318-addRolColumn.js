module.exports = {
    up: async (queryInterface, Sequelize) => queryInterface.addColumn(
      'Modelos',
      'rol',
      {
        type: Sequelize.BOOLEAN,
        allowNull: null,
      },
    ),
  
    down: async (queryInterface) => queryInterface.removeColumn('Modelos', 'rol'),
  };
  