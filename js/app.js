/*
 * Funcionalidad de tu producto
 */
// Puedes hacer uso de la base de datos a través de la variable `data`

//console.log(data);

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

/*__________MENU TAB (info general, estudiantes, profesores_________*/
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// MENU PARA SELECCIONAR CURSO
// Llamamos al elemento contenedor
var seleccionar_gen = document.getElementById('select_curso');

// Creamos un elemento option por generación
// Le damos atributo value
// Creamos un textnode para darle nombre a cada opción
// Agregamos el textnode a la opción
var opt_comun = document.createElement('option')
opt_comun.setAttribute('value','value1');
var txt_comun = document.createTextNode('Curso común');
opt_comun.appendChild(txt_comun);

var opt_sprint1 = document.createElement('option')
opt_sprint1.setAttribute('value','value2');
var txt_sprint1 = document.createTextNode('Sprint 1');
opt_sprint1.appendChild(txt_sprint1);

var opt_sprint2 = document.createElement('option')
opt_sprint2.setAttribute('value','value3');
var txt_sprint2 = document.createTextNode('Sprint 2');
opt_sprint2.appendChild(txt_sprint2);

var opt_sprint3 = document.createElement('option')
opt_sprint3.setAttribute('value','value4');
var txt_sprint3 = document.createTextNode('Sprint 3');
opt_sprint3.appendChild(txt_sprint3);

var opt_sprint4 = document.createElement('option')
opt_sprint4.setAttribute('value','value4');
var txt_sprint4 = document.createTextNode('Sprint 4');
opt_sprint4.appendChild(txt_sprint4);

var opt_js = document.createElement('option')
opt_js.setAttribute('value','value5');
var txt_js = document.createTextNode('Javascript');
opt_js.appendChild(txt_js);

var opt_sprint5js = document.createElement('option')
opt_sprint5js.setAttribute('value','value6');
var txt_sprint5js = document.createTextNode('Sprint 5');
opt_sprint5js.appendChild(txt_sprint5js);

var opt_sprint6js = document.createElement('option')
opt_sprint6js.setAttribute('value','value7');
var txt_sprint6js = document.createTextNode('Sprint 6');
opt_sprint6js.appendChild(txt_sprint6js);

var opt_sprint7js = document.createElement('option')
opt_sprint7js.setAttribute('value','value8');
var txt_sprint7js = document.createTextNode('Sprint 7');
opt_sprint7js.appendChild(txt_sprint7js);

var opt_ux = document.createElement('option')
opt_ux.setAttribute('value','value9');
var txt_ux = document.createTextNode('UX Design');
opt_ux.appendChild(txt_ux);

var opt_sprint5ux = document.createElement('option')
opt_sprint5ux.setAttribute('value','value10');
var txt_sprint5ux = document.createTextNode('Sprint 5');
opt_sprint5ux.appendChild(txt_sprint5ux);

var opt_sprint6ux = document.createElement('option')
opt_sprint6ux.setAttribute('value','value11');
var txt_sprint6ux = document.createTextNode('Sprint 6');
opt_sprint6ux.appendChild(txt_sprint6ux);

var opt_sprint7ux = document.createElement('option')
opt_sprint7ux.setAttribute('value','value12');
var txt_sprint7ux = document.createTextNode('Sprint 7');
opt_sprint7ux.appendChild(txt_sprint7ux);
// Agregamos las opciones al elemento select
// Agregamos el elemento select a nuestro elemento en html
select_curso.appendChild(opt_comun);
select_curso.appendChild(opt_sprint1);
select_curso.appendChild(opt_sprint2);
select_curso.appendChild(opt_sprint3);
select_curso.appendChild(opt_sprint4);
select_curso.appendChild(opt_js);
select_curso.appendChild(opt_sprint5js);
select_curso.appendChild(opt_sprint6js);
select_curso.appendChild(opt_sprint7js);
select_curso.appendChild(opt_ux);
select_curso.appendChild(opt_sprint5ux);
select_curso.appendChild(opt_sprint6ux);
select_curso.appendChild(opt_sprint7ux);

// Determinamos el valor a mostrar al cargar la página,
// que corresponde a nuestra generación 2017-II
select_curso.selectedIndex = "4";

// MENU PARA SELECCIONAR CIUDAD
// Llamamos al elemento contenedor
var select_hse = document.getElementById('select_hse');

// Creamos un elemento option por sprint
// Le damos atributo value
// Creamos un textnode para darle nombre a cada opción
// Agregamos el textnode a la opción
var opt_hse = document.createElement('option')
opt_hse.setAttribute('value','value1');
var txt_hse = document.createTextNode('HSE');
opt_hse.appendChild(txt_hse);

var opt_hse1 = document.createElement('option')
opt_hse1.setAttribute('value','value2');
var txt_hse1 = document.createTextNode('Sprint 1');
opt_hse1.appendChild(txt_hse1);

var opt_hse2 = document.createElement('option')
opt_hse2.setAttribute('value','value3');
var txt_hse2 = document.createTextNode('Sprint 2');
opt_hse2.appendChild(txt_hse2);

var opt_hse3 = document.createElement('option')
opt_hse3.setAttribute('value','value4');
var txt_hse3 = document.createTextNode('Sprint 3');
opt_hse3.appendChild(txt_hse3);

var opt_hse4 = document.createElement('option')
opt_hse4.setAttribute('value','value4');
var txt_hse4 = document.createTextNode('Sprint 4');
opt_hse4.appendChild(txt_hse4);

// Agregamos las opciones al elemento select
// Agregamos el elemento select a nuestro elemento en html
select_hse.appendChild(opt_hse);
select_hse.appendChild(opt_hse1);
select_hse.appendChild(opt_hse2);
select_hse.appendChild(opt_hse3);
select_hse.appendChild(opt_hse4);

// Determinamos el valor a mostrar al cargar la página,
// que corresponde a nuestra ciudad, Santiago
select_hse.selectedIndex = "4";

// _____________ AGREGAR ALUMNAS_________//

var content_students = document.getElementById('contenedor_alumnas');
var div_all_students = document.createElement('div');
div_all_students.style.display='inline-block';
div_all_students.style.verticalAlign='top';

content_students.appendChild(div_all_students);

for (var i = 0; i < data.students.length; i++){
    if (data.students[i].active == true){

    var div_students = document.createElement('div');
    div_students.setAttribute('class','div_students');

    var tab_student = document.createElement('table');
    tab_student.setAttribute('class','tabla_estudiantes');
    var tr_student = document.createElement('tr');

    var td_student = document.createElement('td');
    var img_student = document.createElement('img');
    img_student.setAttribute("src", data.students[i].photo);
    td_student.appendChild(img_student);

    var td_name = document.createElement('td');
    var name_student = document.createElement('h4');
    var txt_name_student = document.createTextNode(data.students[i].name);
    name_student.appendChild(txt_name_student);
    var spcl_student = document.createElement('h5');
    var txt_spcl_student = document.createTextNode(data.students[i].specialization);
    spcl_student.appendChild(txt_spcl_student);
    td_name.appendChild(name_student);
    td_name.appendChild(spcl_student);

    var td_tech_points = document.createElement('td');
    var tech_points = document.createElement('h4');
    var txt_tech_points = document.createTextNode(data.students[i].sprints[0].score.tech);
    tech_points.appendChild(txt_tech_points);
    var puntaje_tecnico = document.createElement('h5');
    var txt_puntaje_tecnico = document.createTextNode('Pts técnicos');
    puntaje_tecnico.appendChild(txt_puntaje_tecnico);
    td_tech_points.appendChild(tech_points);
    td_tech_points.appendChild(puntaje_tecnico);

    var td_hse_points = document.createElement('td');
    var hse_points = document.createElement('h4');
    var txt_hse_points = document.createTextNode(data.students[i].sprints[0].score.hse);
    hse_points.appendChild(txt_hse_points);
    var puntaje_hse = document.createElement('h5');
    var txt_puntaje_hse = document.createTextNode('Pts HSE');
    puntaje_hse.appendChild(txt_puntaje_hse);
    td_hse_points.appendChild(hse_points);
    td_hse_points.appendChild(puntaje_hse);
    
    var td_english = document.createElement('td');
    var english_lvl = document.createElement('h4');
    var txt_english = document.createTextNode('Intermedio');
    english_lvl.appendChild(txt_english);
    var nvl_ingles = document.createElement('h5');
    var txt_nvl_ingles = document.createTextNode('Nivel inglés');
    nvl_ingles.appendChild(txt_nvl_ingles);
    td_english.appendChild(english_lvl);
    td_english.appendChild(nvl_ingles);

    //agrega boton eliminar estudiantes
    
    var btn_eliminar = document.createElement('button');
    btn_eliminar.setAttribute('class','btn_eliminar');
    var txt_btn = document.createTextNode('Eliminar');
    btn_eliminar.appendChild(txt_btn);


    td_english.appendChild(btn_eliminar);


    //agrega boton modificar a estudiantes

    var btn_modificar=document.createElement('button');
    btn_modificar.setAttribute('class', 'btn_modificar');
    var txt_mod =document.createTextNode('Modificar');
    btn_modificar.appendChild(txt_mod);

    td_hse_points.appendChild(btn_modificar);
//_______________________________________________

    tr_student.appendChild(td_student);
    tr_student.appendChild(td_name);
    tr_student.appendChild(td_tech_points);
    tr_student.appendChild(td_hse_points);
    tr_student.appendChild(td_english);
    tab_student.appendChild(tr_student);
    div_students.appendChild(tab_student);
    div_all_students.appendChild(div_students);
    }
}

google.charts.setOnLoadCallback(drawSarahChart);
//funcion boton eliminar estudiantes
function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

      //___________________ GRAFICO EVALUACIONES TECNICAS_______________________
google.charts.setOnLoadCallback(drawAnthonyChart);

      // FUNCION EVALUACIONES TECNICAS BARRA
function drawSarahChart() {

//DA NOMBRES A LAS VARIABLES GRAFICO BARRA
    var data = google.visualization.arrayToDataTable([
        ['Ítem','Porcentaje',{role:'style'}],       
        ['Quiz1', 50, 'orange'],//da parametro a variable
        ['ReQuiz', 90,'orange'],
        ['Reto', 60,'orange'],
        ['P. Final', 70,'orange'],
        ['Total Ev.Tec.', 70,'orange']
    ]);

// tamaño contenedor grafico barra
    var options = {title:'% de Alumnas que logran el 70% en Evaluaciones Técnicas',
                    width:500,
                    height:300
                    };

    // Instantiate and draw the chart for Sarah's pizza.
    var chart = new google.visualization.BarChart(document.getElementById('Sarah_chart_div'));
    chart.draw(data, options);
}

      // función grafico torta Evaluacion por Nivel 
function drawAnthonyChart() {

    // ______________GRAFICO TORTA
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
        ['Nivel Alto [90-100]', 2],
        ['Nivel Medio Alto [70-89]', 2],
        ['Nivel Medio [50-69]', 2],
        ['Nivel Medio bajo [30-49]', 0],
        ['Nivel Bajo [0-29]', 3]
    ]);

    // tamaño contenedor grafico torta
    var options = {title:'% de Alumnas por Nivel de Evaluación',
                    width:450,
                    height:300,
                    slices: {
                        0: { color: 'yellow' },
                        1: { color: 'orange' },
                        2: { color: 'gray'},
                        3: { color: ''},
                        4: { color: 'lightgray'}, 
                      }
                };

    // 
    var chart = new google.visualization.PieChart(document.getElementById('Anthony_chart_div'));
    chart.draw(data, options);
}

      //____________GRAFICO EVALUACIONES HSE_____________________________

      //grafico barras
    
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawVisualization);

function drawVisualization() {
    // Some raw data (not necessarily accurate)
    var data = google.visualization.arrayToDataTable([
        ['Sprint', 'Trabajo equipo', 'Comunicacion', 'Manejo estrés', 'PROMEDIO'],
        ['Sprint1',  60,      75,         60,          70],
        ['Sprint2',  50,      60,        100,          75],
        ['Sprint3',  55,      90,         70,          80]
    ]);

    var options = {
        title : 'Evaluación por Sprint',
        vAxis: {title: '%Evaluación'},
        hAxis: {title: '2017 II'},
        seriesType: 'bars',
        series: {5: {type: 'line'}},
        colors: ['yellow', 'orange', 'grey', 'lightgray']
    };

    var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}

//Grafico Donut HSE
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'nivel');
    data.addColumn('number', 'Populartiy');
    data.addRows([
        ['Nivel Alto [90-100]', 2],
        ['Nivel Medio Alto [70-89]', 2],
        ['Nivel Medio [50-69]', 2],
        ['Nivel Medio bajo [30-49]', 0],
        ['Nivel Bajo [0-29]', 3]
    ]);

    var options = {
    title: '% de Alumnas por Nivel de Evaluación',
    sliceVisibilityThreshold: .2,
    slices: {
        0: { color: 'yellow' },
        1: { color: 'orange' },
        2: { color: 'gray'},
        3: { color: ''},
        4: { color: 'lightgray'}, 
      }
    };

    var chart = new google.visualization.PieChart(document.getElementById('chart_div2'));
    chart.draw(data, options);
}
    //NAVEGADOR
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

/*______________AMPLIACION FULL GRAFICOS PESTAÑA INFO______________________---*/
// Get the modal
var modal = document.getElementById('myModal');

// amplia Grafico 1
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}

//AMPLIACION GRAFICO 2 FULL___________________
var modal = document.getElementById('myModal');

var img = document.getElementById('myImg2');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
//__________AMPLIACION GRAFICO 3 FULL_________
var modal = document.getElementById('myModal');

var img = document.getElementById('myImg3');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
//_______________AMPLIACION GRAFICO 4 FULL_____
var modal = document.getElementById('myModal');

var img = document.getElementById('myImg4');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
//_______________AMPLIACION FULL GRAFICO 5____
var modal = document.getElementById('myModal');

var img = document.getElementById('myImg5');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}

//______________ NOTA PROFESOR Y JEDI ____________________

var profesores_div = document.getElementById('teachers');
var profesores_turno = document.getElementById('turno_profes');

// Fórmula para promedio de nota de profesores y jedi
var promedio_profe = (data.ratings[0].teacher+data.ratings[1].teacher)/2;
var promedio_jedi = (data.ratings[0].jedi+data.ratings[1].jedi)/2;

var div_profe_jedi = document.createElement('div');
div_profe_jedi.setAttribute('id','div_profe_jedi');
var p_profe = document.createElement('p');
var txt_p_profe = document.createTextNode('Puntuación promedio profesores: '+ promedio_profe);
p_profe.appendChild(txt_p_profe);

var p_jedi = document.createElement('p');
var txt_p_jedi = document.createTextNode('Puntuación promedio jedi: '+promedio_jedi);
p_jedi.appendChild(txt_p_jedi);

div_profe_jedi.appendChild(p_profe);
div_profe_jedi.appendChild(p_jedi);

profesores_div.insertBefore(div_profe_jedi,profesores_turno); 

//______________ NOTA PROFESOR Y JEDI ____________________

// Funciones para mostrar y esconder las notas de los profesores

function myFunction1() {
    var element = document.getElementById("myDIV1");
    element.classList.toggle("hidden_notes");
 }

 function myFunction2() {
    var element = document.getElementById("myDIV2");
    element.classList.toggle("hidden_notes");
 }

 function myFunction3() {
    var element = document.getElementById("myDIV3");
    element.classList.toggle("hidden_notes");
 }

// ____________ FUNCION PARA SELECCIONAR ALUMNAS SEGÚN CURSO _______

var checkbox_materia = document.getElementsByName('especialidad');
var div_alumnas = document.getElementsByClassName('div_students');

function showMe () {

    if (checkbox_materia[0].checked == true){
        div_alumnas[0].style.display='block';
        div_alumnas[1].style.display='block';
        div_alumnas[2].style.display='block';
        div_alumnas[11].style.display='block';
        div_alumnas[12].style.display='block';
    }else{            
        div_alumnas[0].style.display='none';
        div_alumnas[1].style.display='none';
        div_alumnas[2].style.display='none';
        div_alumnas[11].style.display='none';
        div_alumnas[12].style.display='none';          
    }

    if (checkbox_materia[1].checked == true){
        div_alumnas[3].style.display='block';            
        div_alumnas[4].style.display='block';            
        div_alumnas[5].style.display='block';            
    }else{            
        div_alumnas[3].style.display='none';
        div_alumnas[4].style.display='none';
        div_alumnas[5].style.display='none';
    }

    if (checkbox_materia[2].checked == true){
        div_alumnas[6].style.display='block';            
        div_alumnas[7].style.display='block';            
        div_alumnas[13].style.display='block';            
    }else{            
        div_alumnas[6].style.display='none';
        div_alumnas[7].style.display='none';
        div_alumnas[13].style.display='none';
    }

    if (checkbox_materia[3].checked == true){
        div_alumnas[8].style.display='block';            
        div_alumnas[9].style.display='block';            
        div_alumnas[10].style.display='block'; 
        div_alumnas[14].style.display='block';                        
    }else{            
        div_alumnas[8].style.display='none';
        div_alumnas[9].style.display='none';
        div_alumnas[10].style.display='none';
        div_alumnas[14].style.display='none';
    }
}

//________FUNCION PARA ELIMINAR ALUMNAS DE LA LISTA _________

btn_eliminar.setAttribute('class','btn_eliminar');

var btns_eliminar = document.getElementsByClassName('btn_eliminar');

btns_eliminar[0].addEventListener('click', function(){
    div_alumnas[0].style.display = 'none';
})

btns_eliminar[1].addEventListener('click', function(){
    div_alumnas[1].style.display = 'none';
})

btns_eliminar[2].addEventListener('click', function(){
    div_alumnas[2].style.display = 'none';
})

btns_eliminar[3].addEventListener('click', function(){
    div_alumnas[3].style.display = 'none';
})

btns_eliminar[4].addEventListener('click', function(){
    div_alumnas[4].style.display = 'none';
})

btns_eliminar[5].addEventListener('click', function(){
    div_alumnas[5].style.display = 'none';
})

btns_eliminar[6].addEventListener('click', function(){
    div_alumnas[6].style.display = 'none';
})

btns_eliminar[7].addEventListener('click', function(){
    div_alumnas[7].style.display = 'none';
})

btns_eliminar[8].addEventListener('click', function(){
    div_alumnas[8].style.display = 'none';
})

btns_eliminar[9].addEventListener('click', function(){
    div_alumnas[9].style.display = 'none';
})

btns_eliminar[10].addEventListener('click', function(){
    div_alumnas[10].style.display = 'none';
})

btns_eliminar[11].addEventListener('click', function(){
    div_alumnas[11].style.display = 'none';
})

btns_eliminar[12].addEventListener('click', function(){
    div_alumnas[12].style.display = 'none';
})

btns_eliminar[13].addEventListener('click', function(){
    div_alumnas[13].style.display = 'none';
})

btns_eliminar[14].addEventListener('click', function(){
    div_alumnas[14].style.display = 'none';
})