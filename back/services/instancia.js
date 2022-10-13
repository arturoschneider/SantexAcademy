const encuestaModel = require('../models').Encuestas;
const modeloModel = require('../models').Modelo;
const { Op } = require("sequelize");

//Devuelve todas las encuestas existentes access:admin
async function findAll() {
  const encuestas = encuestaModel.findAll( {
    attributes: {exclude: ['tipo_de_encuesta', 'updatedAt', 'createdAt']},
    include: { model: modeloModel }
  } );
  return encuestas
}

//Devulve la busqueda access:admin
async function busquedaFind(data, attributes = null) {
  const arrayEncuesta = [];
  const encuestador = await modeloModel.findOne( { 
    where: {
      firstName: data.encuestador
    }
  } );

  
  if (encuestador) {

    const x = {
      id:encuestador.id,
      firstName:encuestador.firstName,
      lastName:encuestador.lastName,
      email:encuestador.email
    }

    const filtros = {
      user_id:x.id,
      //fecha: null,
      num_hogar: null,
      num_vivienda: null
    }; 
  
    if (data.num_hogar) {
      filtros.num_hogar = data.num_hogar
    } 
    if (data.num_vivienda) {
      filtros.num_vivienda = data.num_vivienda
    }
    //if (data.fecha) {
      //filtros.fecha = data.fecha
    //}

    console.log(filtros)

    const encuestas = await encuestaModel.findAll( {
      where: {
        [Op.and]: [filtros]
      },
      tapToModel:true,
      attributes,
      include: { model: modeloModel }
    } );

    console.log(encuestas)

    if(encuestas) {
      encuestas.forEach(x => {
        arrayEncuesta.push({
          id:x.id,
          Encuestador: x.Modelo.firstName,
          cod_area: x.cod_area,
          num_listado: x.num_listado,
          //fecha: x.fecha,
          num_vivienda: x.num_vivienda,
          num_hogar: x.num_hogar})
      });

      return arrayEncuesta
    } else {
      console.log('Encuesta inexistente')
    }

    } else {
      console.log('Encuestador', data.encuestador, 'no fue encontrado')
    }

    
}

//Duvelve solo las encuestas del usuario access:user 
async function findOne(data, attributes = null) {
  const user = await encuestaModel.findAll({ where: data, attributes });
  return user;
}
  
module.exports = {
  findAll,
  busquedaFind,
  findOne
};