const encuestaModel = require('../models').Encuestas;
const userModel = require('../models').user;
const { Op } = require("sequelize");

//Devuelve todas las encuestas existentes access:admin
async function findAll() {
  const encuestas = encuestaModel.findAll( {
    limit: 10,
    attributes: {exclude: ['tipo_de_encuesta', 'updatedAt', 'createdAt']},
    include: { model: userModel }
  } );
  return encuestas
}

//Devulve la busqueda access:admin
async function busquedaFind(data, attributes = null) {
  const arrayEncuesta = [];
  const encuestador = await userModel.findOne( { 
    where: {
      username: data.encuestador
    }
  } );

  
  if (encuestador) {

    const x = {
      id:encuestador.id,
      name:encuestador.name,
      lastname:encuestador.lastname,
      email:encuestador.email,
      phone:encuestador.phone_number
    }

    console.log('log x')
    console.log(x)

    const filtros = {
      user_id:x.id,
      fecha: null,
      num_hogar: null,
      num_vivienda: null
    }; 
  
    if (data.num_hogar) {
      filtros.num_hogar = data.num_hogar
    } 
    if (data.num_vivienda) {
      filtros.num_vivienda = data.num_vivienda
    }
    if (data.fecha) {
      filtros.fecha = data.fecha
    }

    const date = data.fecha

    console.log('log 1');
    console.log(filtros);

    const encuestas = await encuestaModel.findAll( {
      where: {
        [Op.or]: [
          {user_id: filtros.user_id},{num_hogar: filtros.num_hogar},{num_vivienda: filtros.num_vivienda}, {fecha: `%${filtros.fecha}%`}
        ] 
      },
      tapToModel:true,
      attributes,
      include: { model: userModel }
    } );

    console.log('encuestas');
    console.log(encuestas)

    if(encuestas) {
      encuestas.forEach(x => {
        arrayEncuesta.push({
          id:x.id,
          Encuestador: x.user.name,
          cod_area: x.cod_area,
          num_listado: x.num_listado,
          fecha: x.fecha,
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

//Devulve solo las encuestas del usuario access:user 
async function findOne(data, attributes = null) {
  const user = await encuestaModel.findAll({ where: data, attributes });
  return user;
}
  
//Crear nueva encuesta
async function encuestaCreate(data) {

  const encuestador = await userModel.findOne( { 
    where: {
      name: data.encuestador
    }
  } );

  if (encuestador) {
    
    const x = {
      id:encuestador.id,
      firstName:encuestador.firstName,
      lastName:encuestador.lastName,
      email:encuestador.email
    }

    const newEncuesta = {
      user_id:x.id,
      cod_area:data.cod_area,
      num_listado:data.num_listado,
      num_vivienda:data.num_vivienda,
      num_hogar:data.num_hogar,
      fecha: new Date()
    }

    console.log(newEncuesta)
    encuestaModel.create(newEncuesta)

  } else {
    return console.log('Encuestador no existente')
  }
}

module.exports = {
  findAll,
  busquedaFind,
  findOne,
  encuestaCreate
};