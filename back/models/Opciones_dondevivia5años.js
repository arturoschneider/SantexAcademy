'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Opciones_dondevivia5años extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Opciones_dondevivia5años.hasMany(models.Caract_miembros_hogares, {
        foreignKey: 'donde_vivia_5años'
      })
    }
  };
  Opciones_dondevivia5años.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    opciones: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Opciones_dondevivia5años',
  });
  return Opciones_dondevivia5años;
};