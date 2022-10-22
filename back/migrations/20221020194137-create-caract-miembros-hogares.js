'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Caract_miembros_hogares', {
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
      firstName: {
        type: Sequelize.STRING
      },
      relac_parentezco: {
        type: Sequelize.INTEGER,
        references: {
          model:'Opciones_relacionparentezcos',
          key:'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      sexo: {
        type: Sequelize.INTEGER
      },
      fecha: {
        type: Sequelize.DATE
      },
      edad: {
        type: Sequelize.INTEGER
      },
      sit_conyugal: {
        type: Sequelize.INTEGER,
        references: {
          model:'Opciones_sitconyugales',
          key:'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      cobertura_medica: {
        type: Sequelize.INTEGER,
        references: {
          model:'Opciones_coberturamedicas',
          key:'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      saber_leer_escribir: {
        type: Sequelize.INTEGER
      },
      asiste_establec_edu: {
        type: Sequelize.INTEGER
      },
      tipo_establecimiento: {
        type: Sequelize.INTEGER
      },
      nivel_mas_alto: {
        type: Sequelize.INTEGER,
        references: {
          model:'Opciones_nivelcursados',
          key:'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      finalizo_nivel: {
        type: Sequelize.BOOLEAN
      },
      nivel_ult_aprobado: {
        type: Sequelize.INTEGER,
        references: {
          model:'Opciones_ultiañoaprobados',
          key:'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      donde_nacio: {
        type: Sequelize.INTEGER,
        references: {
          model:'Opciones_dondenacios',
          key:'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      donde_vivia_5años: {
        type: Sequelize.INTEGER,
        references: {
          model:'Opciones_dondevivia5años',
          key:'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
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
    await queryInterface.dropTable('Caract_miembros_hogares');
  }
};