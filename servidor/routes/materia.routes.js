const express = require('express'); // lo requerimos para crear rutas del servidor
const router = express.Router();

const materia = require('../controllers/materia.controller');

router.post('/create', materia.createMateria);
router.put('/:id', materia.updateMateria);
router.get('/', materia.getMaterias);
router.delete('/:id', materia.deleteMateria);
router.get('/:id', materia.getMateria);
router.get('/name/:id', materia.getNameOfMateria)



module.exports = router