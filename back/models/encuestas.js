const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class encuestas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      encuestas.belongsTo(models.user.models, {
        foreignKey: 'username'
      })
    }
  };
module.exports = (sequelize, DataTypes) => {
  const encuestas = sequelize.define('encuestas', {
    id_encuesta: {
      type: DataTypes.INTEGER(16),
      allowNull: false,
      primaryKey: true,
    },

    cod_area: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      unique: false,
    },
    num_listado: {
      type: DataTypes.INTEGER(),
      allowNull: false,
      unique: false,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      unique: false,
    },
    num_vivienda: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    num_hogar: {
      type: DataTypes.INTEGER(64),
      allowNull: false,
      unique: false,
    },
    tipo_de_encuesta: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      unique: false,
    },
  }, {
    sequelize,
    modelName: 'encuestas',
  });
  return encuestas;}