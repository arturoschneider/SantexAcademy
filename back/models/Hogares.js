'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hogares extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Hogares.hasMany(models.Caract_miembros_hogares, {
        foreignKey: 'hogar_id'
      })

      Hogares.hasOne(models.Estrategia_hogares, {
        foreignKey:'hogar_id'
      })

      Hogares.belongsTo(models.OpcionesBaños, {
        foreignKey:'baño_tipo'
      })

      Hogares.belongsTo(models.OpcionesCocinas, {
        foreignKey:'cocinar_pref'
      })
      
      Hogares.belongsTo(models.OpcionesHogares, {
        foreignKey:'este_hogar_es'
      })

      Hogares.belongsTo(models.Encuestas, {
        foreignKey:'id_encuestas'
      })
    }
  };
  Hogares.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    id_encuestas: DataTypes.INTEGER,
    amb_excl_trabajo: DataTypes.BOOLEAN,
    amb_excl_trabajo_c: DataTypes.INTEGER,
    tiene_ademas_cocina: DataTypes.BOOLEAN,
    tiene_ademas_lavadero: DataTypes.BOOLEAN,
    tiene_ademas_garage: DataTypes.BOOLEAN,
    tiene_ademas_dormir: DataTypes.BOOLEAN,
    tiene_ademas_dormir_c: DataTypes.INTEGER,
    tiene_ademas_trabaj: DataTypes.BOOLEAN,
    tiene_ademas_trabaj_c: DataTypes.INTEGER,
    este_hogar_es: DataTypes.INTEGER,
    cocinar_pref: DataTypes.INTEGER,
    baño_tipo: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Hogares',
  });
  return Hogares;
};