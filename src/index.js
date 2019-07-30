const express = require('express');
const morgan = require('morgan');
const moogose = require('mongoose');

const app = express();

moogose.connect('mongodb://localhost/menvn-database')
        .then(db => console.log('DB esta conectada'))
        .catch(err=> console.error(err));

//Settings
app.set('port', process.env.PORT || 4000); //Configurar el puerto

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/tasks', require('./routes/tasks'));

//Static files
app.use(express.static(__dirname + '\\public'))

//Server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});