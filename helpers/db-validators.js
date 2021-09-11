const Role = require('../models/role');
const Usuario = require('../models/usuario');

const esRolValido = async(rol = '') =>
{
    const existeRol = await Role.findOne({ rol });
    if(!existeRol)
    {
        throw new Error(`El rol ${ rol } no esta registrado en la DB`);
    }
}

const emailExiste = async(correo = '')=>
{
     //verificar si el correo existe
     const existeEmail = await Usuario.findOne({correo});
     if(existeEmail)
     {
        throw new Error(`El correo ${ correo } ya esta registrado en la DB`);
     }
}

const existeUsuarioPorID = async( id )=>
{
     //verificar existe el usuario por el ID
     const existeUsuario = await Usuario.findById(id);
     if(!existeUsuario)
     {
        throw new Error(`El usuario con ID ${ id } NO EXISTE en la DB!!`);
     }
}

module.exports = 
{
    esRolValido,
    emailExiste,
    existeUsuarioPorID
}