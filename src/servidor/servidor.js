var express = require('express');
var app = express();
var cors = require("cors");
var bodyParser=require("body-parser");
app.use(bodyParser.json());
app.use(cors());

var lista = [];

let ordenador1 = { "marca": "IBM", "modelo": "x1", "precio": 300 };
let ordenador2 = { "marca": "Microsoft", "modelo": "surface", "precio": 2000 };
let ordenador3 = { "marca": "Apple", "modelo": "macbookair", "precio": 1500 };

lista.push(ordenador1, ordenador2, ordenador3);

app.get('/ordenadores', function (req, res) {


   
        res.send(lista);  
  


});

app.post("/ordenadores",function(req,res) {

    lista.push(req.body);
    res.send(req.body);


});

app.put("/ordenadores/:marca",function(req,res) {

    var seleccionado = lista.filter(function (item) {

        return item.marca == req.params.marca;

    })[0];
    let posicion=lista.indexOf(seleccionado);

    lista[posicion]=req.body;
    res.send(req.body);


});




app.get('/ordenadores/:marca', function (req, res) {
  
    var seleccionado = lista.filter(function (item) {

        return item.marca == req.params.marca;

    })[0];

    res.send(seleccionado);


});

app.delete("/ordenadores2/:marca", function (req, res) {

    var seleccionado = lista.filter(function (item) {

        return item.marca == req.params.marca;

    })[0];


    var indice = lista.indexOf(seleccionado);
    lista.splice(indice, 1);

    // envio al cliente el elemento que he borrado
    // en el servidor
    res.send(seleccionado);


});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
