const mongoose = require('mongoose'); // lo requiero para definir mis esquemas
const { Schema } = mongoose;


// asi van a lucir los datos
//con esto le fijo a mongodb los datos que necesito, si falta uno usamos un mensaje de error
const UsuarioSchema = new Schema({
    usuario: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 8 },
    ci_coor: { type: String, required: true, unique: true },
    nom_coor: { type: String, required: true },
    ape_coor: { type: String, required: true },
    correo_coor: { type: String, required: true, unique: true },
    role: { type: String, enum: ["admin", "coordinador"] }


});


module.exports = mongoose.model('Usuario', UsuarioSchema);