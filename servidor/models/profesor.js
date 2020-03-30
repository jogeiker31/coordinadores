const mongoose = require('mongoose');
const { Schema } = mongoose;


const ProfesorSchema = new Schema({

    ci_profesor: { type: String, required: true, unique: true },
    nom_prof: { type: String, required: true },
    ape_prof: { type: String, required: true },
    cor_prof: { type: String, required: true, unique: true },
    horas_est: { type: Number, required: true }
    // horas_ocupadas: { type: Number, required: true },
    //tipo: 
});

module.exports = mongoose.model('Profesor', ProfesorSchema)