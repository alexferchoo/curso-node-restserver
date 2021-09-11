/*{
    nombre: '',
    correo: 'asdfg@asd.com',
    password: '1223345',
    img: '2334',
    rol: 'Rol',
    estado: false,
    google: false
}*/

const {Schema, model} = require('mongoose');

const UsuarioSchema = Schema({
    nombre:{
        type: String,
        required: [true,'El nombre es obligatorio DB']
    },
    correo:{
        type: String,
        required: [true,'El correo es obligatorio DB']
    },
    password:{
        type: String,
        required: [true, 'La contraseña es obligatoria DB']
    },
    img:{
        type: String
    },
    rol: {
        type: String,
        required: true,
    },
    estado:{
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
});

UsuarioSchema.methods.toJSON = function ()
{
    const {__v, password, ...usuario } = this.toObject();
    return usuario;
}

module.exports = model( 'Usuario', UsuarioSchema );