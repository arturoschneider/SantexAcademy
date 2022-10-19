'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Opciones_nivelcursados extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Opciones_nivelcursados.hasMany(models.Caract_miembros_hogares, {
        foreignKey: 'nivel_mas_alto'
      })
    }
  };
  Opciones_nivelcursados.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    opciones: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Opciones_nivelcursados',
  });
  return Opciones_nivelcursados;
};