'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OpcionesBaños extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      OpcionesBaños.hasMany(models.Hogar, {
        foreignKey: 'baño_tipo'
      })
    }
  };
  OpcionesBaños.init({
    opciones: DataTypes.STRING,
    value: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'OpcionesBaños',
  });
  return OpcionesBaños;
};