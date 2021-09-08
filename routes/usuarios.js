const { Router } = require('express');
const {  usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete} = require('../controllers/usuarios');

const router = Router();

 //Get
 router.get('/', usuariosGet);

 //Put
 router.post('/', usuariosPost);

 //Post
 router.put('/:id', usuariosPut);

 //delete
 router.delete('/', usuariosDelete);

 //patch
 router.patch('/', usuariosPatch);

 module.exports = router;