'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Estrategia_hogares', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hogar_id: {
        type: Sequelize.INTEGER,
        references: {
          model:'Hogares',
          key:'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      tres_meses_ganan_trabajo: {
        type: Sequelize.BOOLEAN
      },
      tres_meses_jubilacion: {
        type: Sequelize.BOOLEAN
      },
      tres_meses_indemnizacion: {
        type: Sequelize.BOOLEAN
      },
      tres_meses_seg_desempleo: {
        type: Sequelize.BOOLEAN
      },
      tres_meses_ayudasocial: {
        type: Sequelize.BOOLEAN
      },
      tres_meses_mercad_donadas: {
        type: Sequelize.BOOLEAN
      },
      tres_meses_mercad_familiar: {
        type: Sequelize.BOOLEAN
      },
      cobr_alquiler: {
        type: Sequelize.BOOLEAN
      },
      cobr_ganan_negocios: {
        type: Sequelize.BOOLEAN
      },
      cobr_inversiones: {
        type: Sequelize.BOOLEAN
      },
      cobr_becaestudio: {
        type: Sequelize.BOOLEAN
      },
      adem_gastarahorros: {
        type: Sequelize.BOOLEAN
      },
      adem_prest_familiares: {
        type: Sequelize.BOOLEAN
      },
      adem_prest_banco: {
        type: Sequelize.BOOLEAN
      },
      adem_compra_cuotas: {
        type: Sequelize.BOOLEAN
      },
      adem_vender_pertenencias: {
        type: Sequelize.BOOLEAN
      },
      adem_otros_ingresos_efec: {
        type: Sequelize.BOOLEAN
      },
      adem_menores_ayuda_trab: {
        type: Sequelize.BOOLEAN
      },
      adem_menores_ayuda_pidie: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Estrategia_hogares');
  }
};