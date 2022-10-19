const { Op } = require("sequelize");
const userModel = require('../models').user;

//Devuelve todos los usuarios existentes access:admin
async function findAll() {
    const list = userModel.findAll( {
      attributes: {exclude: [ 'updatedAt', 'createdAt']}
    } );
    return list
}

//Devuelve la busqueda (modificar dato filtros/rol)
async function findOne(data, attributes = null) {

  const filtros = {
    name: null,
    lastname: null,
    rol: null
  }; 

  if (data.name) {
    filtros.name = data.name
  } 
  if (data.lastname) {
    filtros.lastname = data.lastname
  }
  if (data.admin === false) {
    filtros.rol = 0
  } else {
    filtros.rol = 1
  }

  console.log(0)
  console.log(filtros)

  const user = await userModel.findOne( {
    where: {
      [Op.and]: [
        {name: filtros.name},{lastname: filtros.lastname},{rol: filtros.rol}
      ]
    },
    attributes
  } );

  console.log(1)
  console.log(user)

  const resultado = {
    id:user.id,
    nombre: user.name,
    apellido: user.lastname,
    rol: user.rol
  }

  console.log(2)
  console.log(resultado)
  
  if(resultado.rol === 1) {
    resultado.rol = 'admin'
  } else {
    resultado.rol = 'encuestador'
  }

  return resultado
}

//Crear usuario nuevo
async function userCreate(data) {

  if(data.admin === false) {
    data.admin === 0
  } else {
    data.admin === 1
  }

  const newUser = {
    name:data.name,
    lastname:data.lastname,
    email:data.email,
    phone_number: data.phone_number,
    rol:data.admin
  }

  console.log(0)
  console.log(newUser)
  userModel.create(newUser)
}

module.exports = {
    findAll,
    findOne,
    userCreate
}