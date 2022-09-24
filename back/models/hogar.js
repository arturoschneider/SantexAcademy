const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class hogar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  hogar.init({
    id_encuesta: DataTypes.NUMBER,
    cod_area: DataTypes.NUMBER,
    num_listado: DataTypes.NUMBER,
    fecha: DataTypes.DATE,
    num_vivienda: DataTypes.NUMBER,
    num_hogar: DataTypes.NUMBER,
    tipo_de_encuesta: DataTypes.NUMBER,
  }, {
    sequelize,
    modelName: 'hogar',
  });
  return hogar;
};
