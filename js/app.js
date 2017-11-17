/*
 * Funcionalidad de tu producto
 */
// Puedes hacer uso de la base de datos a través de la variable `data`

console.log(data);

var seleccionar_ciudad = document.getElementById('seleccionar_ciudad');


var select_ciudad = document.createElement('select');
select_ciudad.setAttribute('name','select_ciudad');
select_ciudad.setAttribute('id','select_ciudad');

var option_lima = document.createElement('option')
option_lima.setAttribute('value','value1');
var texto_lima = document.createTextNode('Lima');
option_lima.appendChild(texto_lima);

var option_aqp = document.createElement('option')
option_aqp.setAttribute('value','value2');
var texto_aqp = document.createTextNode('Arequipa');
option_aqp.appendChild(texto_aqp);

var option_stgo = document.createElement('option')
option_stgo.setAttribute('value','value3');
var texto_stgo = document.createTextNode('Santiago');
option_stgo.appendChild(texto_stgo);

select_ciudad.appendChild(option_lima);
select_ciudad.appendChild(option_aqp);
select_ciudad.appendChild(option_stgo);
seleccionar_ciudad.appendChild(select_ciudad);

select_ciudad.selectedIndex = "2";


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