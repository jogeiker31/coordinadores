const express = require('express');
const router = express.Router()

const aula = require('../controllers/aula.controller');

router.post('/create', aula.createAula);
router.get('/', aula.getAulas);
router.get('/:id', aula.getAula);
router.put('/:id', aula.updateAula);
router.delete('/:id', aula.deleteAula);

module.exports = router