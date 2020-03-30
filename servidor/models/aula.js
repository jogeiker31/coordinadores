const mongoose = require('mongoose');
const { Schema } = mongoose

const AulaSchema = new Schema({
    aula: { type: Number, required: true, unique: true },
    /*  estado: { type: String, enum: ["ocupada", "libre"] },
     ocupada: { type: String, unique: true } */
});

module.exports = mongoose.model('Aula', AulaSchema);