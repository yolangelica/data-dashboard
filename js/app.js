/*
 * Funcionalidad de tu producto
 */
// Puedes hacer uso de la base de datos a través de la variable `data`

console.log(data);

var seleccionar_ciudad = document.getElementById('seleccionar_ciudad');

var lista_ciudad = document.createElement('ul');
var li_lima = document.createElement('li');
var lima = document.createTextNode('Lima');
li_lima.appendChild(lima);

var li_aqp = document.createElement('li');
var aqp = document.createTextNode('Arequipa');
li_aqp.appendChild(aqp);

var li_stgo = document.createElement('li')
var stgo = document.createTextNode('Santiago');
li_stgo.appendChild(stgo);

var li_mex = document.createElement('li');
var mex = document.createTextNode('Ciudad de México');
li_mex.appendChild(mex);

lista_ciudad.appendChild(li_lima);
lista_ciudad.appendChild(li_aqp);
lista_ciudad.appendChild(li_stgo);
lista_ciudad.appendChild(li_mex);

seleccionar_ciudad.appendChild(lista_ciudad);