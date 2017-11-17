/*
 * Funcionalidad de tu producto
 */
// Puedes hacer uso de la base de datos a través de la variable `data`

console.log(data);

// MENU PARA SELECCIONAR CIUDAD
var seleccionar_ciudad = document.getElementById('seleccionar_ciudad');

var select_ciudad = document.createElement('select');
select_ciudad.setAttribute('name','select_ciudad');
select_ciudad.setAttribute('id','select_ciudad');

var option_lima = document.createElement('option')
option_lima.setAttribute('value','value1');
var texto_lima = document.createTextNode('LIMA');
option_lima.appendChild(texto_lima);

var option_aqp = document.createElement('option')
option_aqp.setAttribute('value','value2');
var texto_aqp = document.createTextNode('AREQUIPA');
option_aqp.appendChild(texto_aqp);

var option_stgo = document.createElement('option')
option_stgo.setAttribute('value','value3');
var texto_stgo = document.createTextNode('SANTIAGO');
option_stgo.appendChild(texto_stgo);

var option_mex = document.createElement('option')
option_mex.setAttribute('value','value4');
var texto_mex = document.createTextNode('CIUDAD DE MÉXICO');
option_mex.appendChild(texto_mex);

select_ciudad.appendChild(option_lima);
select_ciudad.appendChild(option_aqp);
select_ciudad.appendChild(option_stgo);
select_ciudad.appendChild(option_mex);
seleccionar_ciudad.appendChild(select_ciudad);

select_ciudad.selectedIndex = "2";

// MENU PARA SELECCIONAR GENERACION

var seleccionar_gen = document.getElementById('seleccionar_generacion');

var select_gen = document.createElement('select');
select_gen.setAttribute('name','select_generacion');
select_gen.setAttribute('id','select_generacion');

var option_gen20151 = document.createElement('option')
option_gen20151.setAttribute('value','value1');
var texto_gen20151 = document.createTextNode('2015-I');
option_gen20151.appendChild(texto_gen20151);

var option_gen20161 = document.createElement('option')
option_gen20161.setAttribute('value','value2');
var texto_gen20161 = document.createTextNode('2016-I');
option_gen20161.appendChild(texto_gen20161);

var option_gen20162 = document.createElement('option')
option_gen20162.setAttribute('value','value3');
var texto_gen20162 = document.createTextNode('2016-II');
option_gen20162.appendChild(texto_gen20162);

var option_gen20171 = document.createElement('option')
option_gen20171.setAttribute('value','value4');
var texto_gen20171 = document.createTextNode('2017-I');
option_gen20171.appendChild(texto_gen20171);

var option_gen20172 = document.createElement('option')
option_gen20172.setAttribute('value','value4');
var texto_gen20172 = document.createTextNode('2017-II');
option_gen20172.appendChild(texto_gen20172);

select_gen.appendChild(option_gen20151);
select_gen.appendChild(option_gen20161);
select_gen.appendChild(option_gen20162);
select_gen.appendChild(option_gen20171);
select_gen.appendChild(option_gen20172);
seleccionar_gen.appendChild(select_gen);

select_gen.selectedIndex = "4";






/*
var lista_ciudad = document.createElement('ul');

var option_stgo = document.getElementById('option_stgo');

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
*/