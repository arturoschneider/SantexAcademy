const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Encuestas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    
  }
  Encuestas.init({
    id_encuesta: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    user_id: DataTypes.INTEGER,
    cod_area: DataTypes.INTEGER,
    num_listado: DataTypes.INTEGER,
    fecha: DataTypes.DATE,
    num_vivienda: DataTypes.INTEGER,
    num_hogar: DataTypes.INTEGER,
    tipo_de_encuesta: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Encuestas',
  });
  return Encuestas;
};
