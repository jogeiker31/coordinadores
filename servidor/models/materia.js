const mongoose = require('mongoose'); // lo requiero para definir mis esquemas
const { Schema } = mongoose;


// asi van a lucir los datos
//con esto le fijo a mongodb los datos que necesito, si falta uno usamos un mensaje de error
const MateriaSchema = new Schema({

    codigo_materia: { type: String, required: true, unique: true },
    nombre_mat: { type: String, required: true, unique: true },
    horas_teo: { type: Number, required: true },
    horas_pra: { type: Number, required: true },
    horas_lab: { type: Number, required: true }

});


module.exports = mongoose.model('Materia', MateriaSchema);