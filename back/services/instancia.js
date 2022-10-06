const encuestaModel = require('../models').Encuestas;
const modeloModel = require('../models').Modelo;

async function findAll() {
  const encuestas = encuestaModel.findAll( {
    attributes: {exclude: ['tipo_de_encuesta', 'updatedAt', 'createdAt']},
    include: { model: modeloModel }
  } );
  return encuestas
}

//Devuelve las encuestas del usurio logeado
async function findAllUser() {
  const encuestas = encuestaModel.findAll( {
    attributes: {exclude: ['tipo_de_encuesta', 'updatedAt', 'createdAt']},
    include: { model: modeloModel }
  } );
  return encuestas
}

async function busquedaFind(data, attributes = null) {
  const encuestas = encuestaModel.findAll( {
    where: {
      user_id: data.user_id,
      cod_area: data.cod_area,
      num_listado: data.num_listado,
      fecha: data.fecha,
      num_vivienda: data.num_vivienda,
      num_hogar: data.num_hogar
    },
    attributes,
    include: { model: modeloModel }
  } );
  return encuestas
}

  
module.exports = {
  findAll,
  findAllUser,
  busquedaFind
};