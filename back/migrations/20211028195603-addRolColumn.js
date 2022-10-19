module.exports = {
    up: async (queryInterface, Sequelize) => queryInterface.addColumn(
      'users',
      'rol',
      {
        type: Sequelize.BOOLEAN,
        allowNull: null,
      },
    ),
  
    down: async (queryInterface) => queryInterface.removeColumn('users', 'rol'),
  };