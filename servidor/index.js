var express = require('express');
var app = express();
const morgan = require('morgan');
const { mongoose } = require('./database');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));


app.use('/api/usuario', require('./routes/usuario.routes'));
app.use('/api/materia', require('./routes/materia.routes'));
app.use('/api/profesor', require('./routes/profesor'));
app.use('/api/aula', require('./routes/aula.routes'));


app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});