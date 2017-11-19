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
    if (data.students[i].sprints.length == 2){

    var div_students = document.createElement('div');
    div_students.setAttribute('class','div_students')

    var tab_student = document.createElement('table');
    tab_student.setAttribute('id','tabla_estudiantes');
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

var lookfor_students = document.getElementsByName('especialidad');

google.charts.setOnLoadCallback(drawSarahChart);

      //___________________ GRAFICO EVALUACIONES TECNICAS_______________________
      google.charts.setOnLoadCallback(drawAnthonyChart);

      // FUNCION EVALUACIONES TECNICAS BARRA
      function drawSarahChart() {

        //DA NOMBRES A LAS VARIABLES GRAFICO BARRA
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Quiz1', 50],//da parametro a variable
          ['ReQuiz', 90],
          ['Reto', 60],
          ['P. Final', 70],
          ['Total Ev.Tec.', 70]
        ]);
        

        // tamaño contenedor grafico barra
        var options = {title:'% de Alumnas que logran el 70% en Evaluaciones Técnicas',
                       width:500,
                       height:300};

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
                       height:300};

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
         ['Month', 'Trabajo equipo', 'Comunicacion', 'Manejo estrés', 'PROMEDIO'],
         ['Sprint1',  60,      75,         60,          70],
         ['Sprint2',  50,      60,        100,          75],
         ['Sprint3',  55,      90,         70,          80],
         
         
      ]);

    var options = {
      title : 'Evaluación por Sprint',
      vAxis: {title: '%Evaluación'},
      hAxis: {title: '2017 II'},
      seriesType: 'bars',
      series: {5: {type: 'line'}}
    };

    var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }

//Grafico Donut HSE
google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Work',     11],
          ['Eat',      2],
          ['Commute',  2],
          ['Watch TV', 2],
          ['Sleep',    7]
        ]);

        var options = {
          title: 'My Daily Activities',
          pieHole: 0.4,
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }