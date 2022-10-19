'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Caract_miembros_hogares extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Caract_miembros_hogares.belongsTo(models.Hogar, {
        foreignKey: 'hogar_id'
      })

      Caract_miembros_hogares.belongsTo(models.Opciones_coberturamedicas, {
        foreignKey: 'cobertura_medica'
      })

      Caract_miembros_hogares.belongsTo(models.Opciones_dondenacios, {
        foreignKey: 'donde_nacio'
      })

      Caract_miembros_hogares.belongsTo(models.Opciones_dondevivia5años, {
        foreignKey: 'donde_vivia_5años'
      })

      Caract_miembros_hogares.belongsTo(models.Opciones_nivelcursados, {
        foreignKey: 'nivel_mas_alto'
      })

      Caract_miembros_hogares.belongsTo(models.Opciones_relacionparentezcos, {
        foreignKey: 'relac_parentezco'
      })

      Caract_miembros_hogares.belongsTo(models.Opciones_sitconyugales, {
        foreignKey: 'sit_conyugal'
      })

      Caract_miembros_hogares.belongsTo(models.Opciones_ultiañoaprobados, {
        foreignKey: 'nivel_ult_aprobado'
      })
    }
  };
  Caract_miembros_hogares.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    hogar_id: DataTypes.INTEGER,
    firstName: DataTypes.STRING,
    relac_parentezco: DataTypes.INTEGER,
    sexo: DataTypes.INTEGER,
    fecha: DataTypes.DATE,
    edad: DataTypes.INTEGER,
    sit_conyugal: DataTypes.INTEGER,
    cobertura_medica: DataTypes.INTEGER,
    saber_leer_escribir: DataTypes.INTEGER,
    asiste_establec_edu: DataTypes.INTEGER,
    tipo_establecimiento: DataTypes.INTEGER,
    nivel_mas_alto: DataTypes.INTEGER,
    finalizo_nivel: DataTypes.BOOLEAN,
    nivel_ult_aprobado: DataTypes.INTEGER,
    donde_nacio: DataTypes.INTEGER,
    donde_vivia_5años: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Caract_miembros_hogares',
  });
  return Caract_miembros_hogares;
};