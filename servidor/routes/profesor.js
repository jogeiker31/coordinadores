const express = require('express');
const router = express.Router();

const profesor = require('../controllers/profesor.controller');

router.post('/create', profesor.createProfesor);
router.put('/:id', profesor.updateProfesor);
router.get('/', profesor.getProfesores);
router.delete('/:id', profesor.deleteProfesor);
router.get('/:id', profesor.getProfesor);
router.get('/name/:id', profesor.getNameProfesor);

module.exports = router