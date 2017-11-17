/*
 * Funcionalidad de tu producto
 */
// Puedes hacer uso de la base de datos a través de la variable `data`

console.log(data);

// MENU PARA SELECCIONAR CIUDAD
// Llamamos al elemento contenedor
var seleccionar_ciudad = document.getElementById('seleccionar_ciudad');

// Creamos un select para elegir ciudad y le damos atributos
var select_ciudad = document.createElement('select');
select_ciudad.setAttribute('name','select_ciudad');
select_ciudad.setAttribute('id','select_ciudad');

// Creamos un elemento option por ciudad
// Le damos atributo value
// Creamos un textnode para darle nombre a cada opción
// Agregamos el textnode a la opción
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

// Agregamos las opciones al elemento select
// Agregamos el elemento select a nuestro elemento en html
select_ciudad.appendChild(option_lima);
select_ciudad.appendChild(option_aqp);
select_ciudad.appendChild(option_stgo);
select_ciudad.appendChild(option_mex);
seleccionar_ciudad.appendChild(select_ciudad);

// Determinamos el valor a mostrar al cargar la página,
// que corresponde a nuestra ciudad, Santiago
select_ciudad.selectedIndex = "2";


// MENU PARA SELECCIONAR GENERACION
// Llamamos al elemento contenedor
var seleccionar_gen = document.getElementById('seleccionar_generacion');

// Creamos un select para elegir generación y le damos atributos
var select_gen = document.createElement('select');
select_gen.setAttribute('name','select_generacion');
select_gen.setAttribute('id','select_generacion');

// Creamos un elemento option por generación
// Le damos atributo value
// Creamos un textnode para darle nombre a cada opción
// Agregamos el textnode a la opción
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

// Agregamos las opciones al elemento select
// Agregamos el elemento select a nuestro elemento en html
select_gen.appendChild(option_gen20151);
select_gen.appendChild(option_gen20161);
select_gen.appendChild(option_gen20162);
select_gen.appendChild(option_gen20171);
select_gen.appendChild(option_gen20172);
seleccionar_gen.appendChild(select_gen);

// Determinamos el valor a mostrar al cargar la página,
// que corresponde a nuestra generación 2017-II
select_gen.selectedIndex = "4";
