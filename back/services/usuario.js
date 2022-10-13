const { Op } = require("sequelize");
const modeloModel = require('../models').Modelo;

//Devuelve todos los usuarios existentes access:admin
async function findAll() {
    const list = modeloModel.findAll( {
      attributes: {exclude: [ 'updatedAt', 'createdAt']}
    } );
    return list
}

//Devuelve la busqueda
async function findOne(data, attributes = null) {

  const filtros = {
    firstName: null,
    lastName: null,
    rol: null
  }; 

  if (data.nombre) {
    filtros.firstName = data.nombre
  } 
  if (data.apellido) {
    filtros.lastName = data.apellido
  }
  if (data.admin) {
    filtros.rol = data.admin
  }

  const user = modeloModel.findOne( {
    where: {
      [Op.and]: [filtros]
    },
    attributes
  } );
  return user
}

module.exports = {
    findAll,
    findOne
}