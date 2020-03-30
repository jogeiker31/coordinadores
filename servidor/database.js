const mongoose = require('mongoose'); //sirve para conectarse y modelar los datos

const URI = 'mongodb://localhost/oferta-academica'; // esta es la direccion de la base de datos

mongoose.connect(URI) // asi mongodb se conecta a esta direccion, hay que exportarlo
    .then(db => console.log('DB is connected')) // para seber si esta conectado 
    .catch(err => console.error(err)); // si hay un error ,muestra el error

module.exports = mongoose;