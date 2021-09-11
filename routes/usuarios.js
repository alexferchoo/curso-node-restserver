const { Router } = require('express');
const { check } = require('express-validator');
const Role = require('../models/role');

const {validarCampos} = require('../middlewares/validar-campos');
const { 
    esRolValido,
    emailExiste,
    existeUsuarioPorID } = require('../helpers/db-validators');

const {  usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete} = require('../controllers/usuarios');



const router = Router();

 //Get
 router.get('/', usuariosGet);

 //Post
 router.post('/',[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe ser de mas de 6 letrs').isLength({ min: 6 }),
    check('correo','El correo no es valido').isEmail(),
    check('correo').custom(emailExiste),
    //check('rol').isIn(['ADMIN_ROLE','USER_ROLE']),
    //check('rol').custom( (rol) => esRolValido(rol) ),
    check('rol').custom( esRolValido ),
    validarCampos
], usuariosPost);

 //Put
 router.put('/:id',[
     check('id', 'No es un Id valido').isMongoId(),
     check('id').custom(existeUsuarioPorID),
     check('rol').custom( esRolValido ),
     validarCampos
 ],usuariosPut);

 //delete
 router.delete('/:id',[
     check('id','No es un ID valido').isMongoId(),
     check('id').custom( existeUsuarioPorID),
     validarCampos
 ], usuariosDelete);

 //patch
 router.patch('/', usuariosPatch);

 module.exports = router;