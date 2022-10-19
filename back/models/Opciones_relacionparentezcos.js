'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Opciones_relacionparentezcos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Opciones_relacionparentezcos.hasMany(models.Caract_miembros_hogares, {
        foreignKey: 'relac_parentezco'
      })
    }
  };
  Opciones_relacionparentezcos.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    opciones: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Opciones_relacionparentezcos',
  });
  return Opciones_relacionparentezcos;
};