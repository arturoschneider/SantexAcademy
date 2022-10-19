'use strict';
const {
  Model
} = require('sequelize');
const caract_miembros_hogares = require('./caract_miembros_hogares');
module.exports = (sequelize, DataTypes) => {
  class Opciones_coberturamedicas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Opciones_coberturamedicas.hasMany(models.Caract_miembros_hogares, {
        foreignKey: 'cobertura_medica'
      })
    }
  };
  Opciones_coberturamedicas.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    opciones: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Opciones_coberturamedicas',
  });
  return Opciones_coberturamedicas;
};