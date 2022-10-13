'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OpcionesCocinas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      OpcionesCocinas.hasMany(models.Hogar, {
        foreignKey: 'cocinar_pref'
      })
    }
  };
  OpcionesCocinas.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    opciones: DataTypes.STRING,
    value: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'OpcionesCocinas',
  });
  return OpcionesCocinas;
};