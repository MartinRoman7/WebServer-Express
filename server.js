const express = require('express');
const app = express();
const hbs = require('hbs');

// Require hbs from helpers.js
require('./hbs/helpers');

const port = process.env.PORT || 3000;

// Middleware
app.use(express.static(__dirname + '/public'));

// Express hbs engine
app.set('view engine', 'hbs');

// Parciales
hbs.registerPartials(__dirname + '/views/partials');

// Helpers
// hbs.registerHelper('getAnio', () => {
//     return new Date().getFullYear();
// });
// hbs.registerHelper('capitalizar', (texto) => {
//     let palabras = texto.split(' ');
//     palabras.forEach((palabra, id) => {
//         palabras[id] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
//     });
//     return palabras.join(' ');
// });

// app.get('/', function(req, res) {
//     let salida = {
//         nombre: 'Martin',
//         edad: 24,
//         url: req.url
//     }
//     res.send(salida);
//     //res.send('Hello Word')
// });

// HBS 
app.get('/', function(req, res) {
    res.render('home', {
        nombre: 'MARTIN ROMÁN'
            //anio: new Date().getFullYear()
    });
});

app.get('/about', function(req, res) {
    res.render('about', {
        nombre: 'Oscar Martín Arcos Román'
            //anio: new Date().getFullYear()
    });
});

app.listen(port, () => {
    console.log(`Listen port ${ port }`);
});