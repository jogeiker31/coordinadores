const express = require('express'); // lo requerimos para crear rutas del servidor
const router = express.Router();

const usuario = require('../controllers/usuario.controller');

router.post('/create', usuario.createUsuario);
router.post('/auth', usuario.getUser)
router.get('/', usuario.getUsers)
router.delete('/:id', usuario.deleteUser)


module.exports = router