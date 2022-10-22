const encuestaModel = require('../models').Encuestas;
const userModel = require('../models').user;
const hogarModel = require('../models').Hogares
const { Op } = require("sequelize");

//Devuelve todas las encuestas existentes access:admin
async function findAll(data, attributes = null) {

  const user = await userModel.findOne({ where: data, attributes });

  if(!user.rol) {
    console.log('Este usuario no es admin')

    const encuestas = await encuestaModel.findAll( {
      where: {user_id: user.id},
      limit: 10,
      attributes: {exclude: ['tipo_de_encuesta', 'updatedAt', 'createdAt']},
      include: { model: userModel }
    } );

  //console.log(0)
  //console.log(encuestas)

    const arrayEncuesta = [];

    encuestas.forEach(x => {
    arrayEncuesta.push({
      id:x.id,
      encuestador: x.user.name + ' ' + x.user.lastname,
      cod_area: x.cod_area,
      num_listado: x.num_listado,
      fecha: x.fecha,
      num_vivienda: x.num_vivienda,
      num_hogar: x.num_hogar})
    });

  //console.log(1)
  //console.log(arrayEncuesta)

    return arrayEncuesta
  } else {
    console.log('Este usuario es admin')

    const encuestas = await encuestaModel.findAll( {
      limit: 10,
      attributes: {exclude: ['tipo_de_encuesta', 'updatedAt', 'createdAt']},
      include: { model: userModel }
    } );

  //console.log(0)
  //console.log(encuestas)

    const arrayEncuesta = [];

    encuestas.forEach(x => {
    arrayEncuesta.push({
      id:x.id,
      encuestador: x.user.name + ' ' + x.user.lastname,
      cod_area: x.cod_area,
      num_listado: x.num_listado,
      fecha: x.fecha,
      num_vivienda: x.num_vivienda,
      num_hogar: x.num_hogar})
    });

  //console.log(1)
  //console.log(arrayEncuesta)

    return arrayEncuesta
  }
}

//Devulve la busqueda access:admin
async function busquedaFind(data, attributes = null) {
  const arrayEncuesta = [];

  //Existe el escuestador?
  const encuestador = await userModel.findOne( { 
    where: {
      name: data.encuestador
    },
    attributes: { exclude: ['password'] }
  } );


  if(!encuestador) {
    return console.log('El encuestador', data.encuestador, 'no existe')
  }

  const x = {
    id:encuestador.id,
    name:encuestador.name,
    lastname:encuestador.lastname,
    email:encuestador.email,
    phone:encuestador.phone_number
  }


  //El encuestador, tiene instancias?
  const encuestadorExist = await encuestaModel.findOne( {
    where: {
        user_id: x.id 
    }
  } );

  if(!encuestadorExist) {
    return console.log('El encuestador, no posee instancias')
  };
  
  

  //Que instancia debo buscar? 
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

    const datefecha = data.fecha;

    const encuestas = await encuestaModel.findAll( {
      where: {
          fecha: { [Op.substring]: datefecha },
          [Op.or]: [{user_id: filtros.user_id},{num_hogar: filtros.num_hogar},{num_vivienda: filtros.num_vivienda},] 
      },
      tapToModel:true,
      attributes,
      include: { model: userModel }
    } );
 


    //La instancia que se me pide, existe?
    if(encuestas) {
      encuestas.forEach(x => {
        arrayEncuesta.push({
          id:x.id,
          encuestador: x.user.name + ' ' + x.user.lastname,
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
}

//Devulve solo las encuestas del usuario access:user (en desuso 22/10/2022)
async function findOne(data, attributes = null) {
  const user = await encuestaModel.findAll({ where: data, attributes });
  return user;
}
  
//Crear nueva encuesta
async function encuestaCreate(data, attributes = null) {

  const user = await userModel.findOne({ where: data.id, attributes });

  console.log(0)
  console.log(user)
  
  const x = {
    id:user.id,
    name:user.name,
    lastname:user.lastname,
    email:user.email
  }

  console.log(1)
  console.log(x)

  const newEncuesta = {
    user_id:x.id,
    cod_area:data.cod_area,
    num_listado:data.num_listado,
    num_vivienda:data.num_vivienda,
    num_hogar:data.num_hogar,
    fecha: data.fecha,
    respondiente: data.respondiente
  }

  console.log(newEncuesta)
  encuestaModel.create(newEncuesta)

}

//Crear nuevo form Hogar
async function hogarCreate(data) {
  const encuesta = await encuestaModel.findOne( { 
    where: {
      id_encuesta: data.id_encuestas
    }
  } );

  if(encuesta) {
    const formulario = {
      id_encuestas: data.id_encuestas,
      amb_excl_trabajo: data.amb_excl_trabajo,
      amb_excl_trabajo_c: data.amb_excl_trabajo_c,
      tiene_ademas_cocina: data.tiene_ademas_cocina,
      tiene_ademas_lavadero: data.tiene_ademas_lavadero,
      tiene_ademas_garage: data.tiene_ademas_garage,
      tiene_ademas_dormir: data.tiene_ademas_cocina,
      tiene_ademas_dormir_c: data.tiene_ademas_dormir_c,
      tiene_ademas_trabaj: data.tiene_ademas_trabaj,
      tiene_ademas_trabaj_c: data.tiene_ademas_trabaj_c,
      este_hogar_es: data.este_hogar_es,
      cocinar_pref: data.cocinar_pref,
      baño_tipo: data.baño_tipo
    }
    const hogares = await hogarModel.findOne( { 
      where: {
        id_encuestas: data.id_encuestas
      }
    } );

    if (hogares) {

      console.log('Formulario ya existente. Crea una nueva instancia o modifique la ya existente')

      return hogares

    } else {
      
      encuestaModel.update({
        tipo_de_encuesta: "2",
      }, {
        where: {
          id_encuesta: data.id_encuestas,
        }
      });

      console.log(0)
      console.log(formulario)

      hogarModel.create(formulario)

      console.log('Formulario cargado con exito')
    }
    
  } else {
    console.log('Instancia no existente, imposible continuar')
  }
  
  return encuesta
}

module.exports = {
  findAll,
  busquedaFind,
  findOne,
  encuestaCreate,
  hogarCreate
};