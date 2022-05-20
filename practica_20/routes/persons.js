//Inyectar dependencias.
const express = require('express');
let router = express.Router();
const mongoose = require('mongoose');
const Person = require('../models/person.js');

//Definir una ruta donde se imprimirá el objeto json.
router.get('/persons', function(req, res, next){
    Person.find(function(err, persons){
        if(err) return next(err); //Regresa un error.
        res.json(persons); //Se regresa la información que pedimos.
    });
});

//Definir que en /person se va a renderizar la vista person.
router.get('/person', function(req, res){
    res.render('person');
});

//Con este post, se nos permite agregar los datos que nos llegaron a la base de datos.
router.post('/addPerson', function(req, res){
    let myPerson = new Person({
        nombre: req.body.nombre,
        edad: req.body.edad,
        tipoSangre: req.body.tipoSangre,
        nss: req.body.nss
    });
    myPerson.save();
});

//Exportar el módulo.
module.exports = router;