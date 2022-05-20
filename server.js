//Importar módulos.
const mongoose = require('mongoose');
const express = require('express');
const personsRoutes = require('./practica_19/routes/persons');

//Hacer una promesa para no tener una conección asíncrona.
mongoose.Promise = global.Promise;
let app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}));
app.use(personsRoutes);

mongoose.connect(
`mongodb+srv://ttejeda:jOIJJnQ6gEILygAu@cluster0.uy9zi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, //Conección al cluster de MongoDB Atlas
{
useNewUrlParser: true,
useUnifiedTopology: true
}
);

const db = mongoose.connection; //Establece conexión con la base de datos
db.on("error", console.error.bind(console, "connection error: ")); //Mensaje de error si no se conecta adecuadamente
db.once("open", function () {
console.log("Connected successfully"); //Mensaje de éxito de conexión
});

app.listen(3000);