'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OpcionesHogares extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      OpcionesHogares.hasMany(models.Hogar, {
        foreignKey: 'este_hogar_es'
      })
    }
  };
  OpcionesHogares.init({
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
    modelName: 'OpcionesHogares',
  });
  return OpcionesHogares;
};