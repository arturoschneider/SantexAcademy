'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Estrategia_hogares extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Estrategia_hogares.belongsTo(models.Hogares, {
        foreignKey: 'hogar_id'
      })
    }
  };
  Estrategia_hogares.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    hogar_id: DataTypes.INTEGER,
    tres_meses_ganan_trabajo: DataTypes.BOOLEAN,
    tres_meses_jubilacion: DataTypes.BOOLEAN,
    tres_meses_indemnizacion: DataTypes.BOOLEAN,
    tres_meses_seg_desempleo: DataTypes.BOOLEAN,
    tres_meses_ayudasocial: DataTypes.BOOLEAN,
    tres_meses_mercad_donadas: DataTypes.BOOLEAN,
    tres_meses_mercad_familiar: DataTypes.BOOLEAN,
    cobr_alquiler: DataTypes.BOOLEAN,
    cobr_ganan_negocios: DataTypes.BOOLEAN,
    cobr_inversiones: DataTypes.BOOLEAN,
    cobr_becaestudio: DataTypes.BOOLEAN,
    adem_gastarahorros: DataTypes.BOOLEAN,
    adem_prest_familiares: DataTypes.BOOLEAN,
    adem_prest_banco: DataTypes.BOOLEAN,
    adem_compra_cuotas: DataTypes.BOOLEAN,
    adem_vender_pertenencias: DataTypes.BOOLEAN,
    adem_otros_ingresos_efec: DataTypes.BOOLEAN,
    adem_menores_ayuda_trab: DataTypes.BOOLEAN,
    adem_menores_ayuda_pidie: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Estrategia_hogares',
  });
  return Estrategia_hogares;
};