//Obtencion del las VAriables alojadas Localmente
const nombre = localStorage.getItem('nombre-name');
const apellidoPaterno = localStorage.getItem('apellidoPaterno-name');
const apellidoMaterno = localStorage.getItem('apellidoMaterno-name');
const direccion = localStorage.getItem('direccion-name');
const ci = localStorage.getItem('ci-name');
const expedido = localStorage.getItem('expedido-name');

//Para que los datos sean obtenidos pero que no sean visibles en la pagina
document.getElementById('nombre-name').textContent = nombre;
document.getElementById('nombre-name').style.display = "none";

document.getElementById('apellidoPaterno-name').textContent = apellidoPaterno;
document.getElementById('apellidoPaterno-name').style.display = "none";

document.getElementById('apellidoMaterno-name').textContent = apellidoMaterno;
document.getElementById('apellidoMaterno-name').style.display = "none";

document.getElementById('direccion-name').textContent = direccion;
document.getElementById('direccion-name').style.display = "none";

document.getElementById('ci-name').textContent = ci;
document.getElementById('ci-name').style.display = "none";

document.getElementById('expedido-name').textContent = expedido;
document.getElementById('expedido-name').style.display = "none";


const texto1erParrafo=document.getElementById('texto-1erParrafo');
const texto1erArticulo=document.getElementById('texto-1erArticulo');
const texto2doArticulo=document.getElementById('texto-2doArticulo');
const texto3erArticulo=document.getElementById('texto-3erArticulo');
const tabla=document.getElementById('tablita');
const texto4toArticulo=document.getElementById('texto-4toArticulo');
const textoarticulosDel5Al10=document.getElementById('texto-articulosDel5Al10');
const textoFirmas = document.getElementById('texto-firmas');


//array con objetos del parrafo 1
const parrafo1p=[{
    parte1:  'Yo', 
    parte2:  ', mayor de edad,',
    parte3:  'con domicilio en calle',
    parte4:  'de la ciudad de',
    parte5:  ' con cédula de identidad ',
    parte6:  ' expedido en la ciudad de ',
    parte7M: ' de aquí en adelante denominado EL CLIENTE, declaro que; habiendo accedido a contratar los servicios  profesionales de parte del Instituto Técnico S.M.A.R.T., en mi calidad  de cliente de ésta, manifiesto que cumpliré con el presente convenio de  la siguiente forma:',
    parte7F:  ' de aquí en adelante denominada EL CLIENTE, declaro que; habiendo accedido a contratar los servicios  profesionales de parte del Instituto Técnico S.M.A.R.T., en mi calidad  de cliente de ésta, manifiesto que cumpliré con el presente convenio de  la siguiente forma:'
}];

//array que contiene la redaccion del ---1er Articulo---
const articulo1=[{
    parte1: `<span>PRIMERA (SERVICIOS).-</span> La institución Smart Step Associates S.R.L. brindará a: "`,
    parte2: `el servicio de curso de aprendizaje del idioma inglés en base al programa tecnológico “Let’s Do It My Way” de acuerdo a la currícula académica presentada en el documento “Guía de Estudio."`,
    parte3: `El CLIENTE o estudiante al quedar inscrito en el Instituto, asume el compromiso de respetar y cumplir a cabalidad los reglamentos y las normas internas del mismo, entregadas en la mencionada “Guía de Estudio”. `
    }];

//array que contiene la redaccion del ---2do Articulo---
const articulo2=[{
    parte1: `<span>SEGUNDA. (GUÍA DE ESTUDIO).-</span>La “Guía de Estudio” entregada al estudiante al momento de su inscripción, es una guía explicativa que detalla el contenido del programa académico, los derechos y obligaciones del  estudiante, los permisos académicos, los compromisos asumidos por los mismo, entre otros. Entre los puntos a resaltar mencionamos los siguientes:  <br> <br>`,
    parte2: `a) La asistencia mínima será controlada de manera semanal siendo 4 clases obligatorias semanales como mínimo para cada estudiante.  <br>`,
    parte3: `b) La nota de aprobación para cada nivel (o STEP) de estudio está definida en 80 puntos sobre 100. <br>`,
    parte4: `c) Las clases inician en un horario en punto, por lo cual el estudiante tendrá la obligación de estar presente en el instituto 5 minutos antes de la hora de su clase y solo tendrá una tolerancia de hasta 5 minutos después de la hora señalada."`
    }];

//array que contiene la redaccion del ---3er Articulo---
const articulo3=[{
    parte1:`<span>TERCERA.-</span> (CURSO O CARRERA Y DURACIÓN). - El estudiante queda inscrito en el siguiente curso(s) o carrera(s): 										`
    }];

//opciones de los cursos a inscribirse en el articulo 3
const nombreCursoA='Capacitacio1';


//tabla de articulo 3
const tablita = `
    <table>
        <tr>
            <th>Nombre del estudiante</th>
            <th>Curso al que esta Inscrito</th>
        </tr>
        <tr>
            <td>${nombre} ${apellidoPaterno} ${apellidoMaterno}</td>
            <td>${nombreCursoA}</td>
        </tr>
        <tr>
            <td>Jane</td>
            <td>Doe</td>
        </tr>
        <tr>
            <td>Jane</td>
            <td>Doe</td>
        </tr>
    </table>
    `;

//array que contiene la redaccion del ---4to articulo---
const articulo4=[{
    parte1:`<span>CUARTA.-</span> (FECHAS DE PAGOS).- Los pagos se realizarán de la siguiente forma:`,
    parte2:`a) Pago único de Inscripción equivalente a  400 (CUATROCIENTOS  00/100 BOLIVIANOS) ****ver la correcta redaccion****`,
    parte3:`B) El pago de las mensualidades, es equivalente a Bs. 285 (DOSCIENTOS OCHENTA Y CINCO 00/100 BOLIVIANOS) por cada usuario que tome el curso,  por cada mes de estudio en el Instituto, mismo que debe efectuarse en fecha 25 de cada mes correspondiente, acorde al día de inicio del programa. La cantidad total de mensualidades depende del curso al cual  el estudiante se encuentre inscrito.`,
    parte4:`Cabe resaltar que el estudiante no incurrirá en gastos adicionales con la excepción del pago del (los) certificado(s) y la documentación requerida para su trámite a la finalización de su programa de estudios.`
    }];

const articulosDel5Al10=[{
    articulo5: `<span>QUINTA. (RETRASO DE PAGOS).–</span> EL CLIENTE declara expresamente que los pagos a realizarse de manera mensual serán efectuados en la fecha pactada, sin incurrir en ningún retraso que ocasione algún tipo de perjuicio a la institución. <br> <br>`,
    articulo6: `<span>SEXTA. (PERMISOS).-</span> La solicitud de todo permiso por inasistencia a clases debe ser presentada por escrito y junto a los respaldos necesarios. Los permisos no podrán ser superiores a un mes ni menores a una semana, debido a motivos pedagógicos y educativos de influencia académica. Al no cumplir con esta cláusula, el permiso no tendrá validez.  <br> <br>`,
    articulo7: `<span>SÉPTIMA. (HORARIOS).-</span> Cabe resaltar que las clases deben ser organizadas día a día según la currícula académica asignada, y la reserva de horarios debe realizarse con un mínimo de 24 Hrs. de anticipación de acuerdo a la programación definida por la institución. Debiendo el estudiante tener la disponibilidad pertinente para tal efecto.  <br> <br>`,
    articulo8: `<span>OCTAVA. (RECISIÓN).-</span> La recisión del presente Convenio de Prestación de Servicios Educativos, se podrá efectuar por la voluntad de cualesquiera de las partes en cualquier momento sin que exista ninguna carga o compromiso adicional posterior para ninguna de ellas.  <br> <br>`,
    articulo9: `<span>NOVENA. (COMPROMISO).-</span> Por lo tanto, EL CLIENTE se compromete a cumplir con todo el reglamento establecido en la “GUÍA DE ESTUDIO” y en el presente convenio, teniendo en cuenta que de no cumplirlo a cabalidad no se obtendrán los resultados ofrecidos.  <br> <br>`,
    articulo10: `<span>DÉCIMA. (CONFORMIDAD).-</span> Ambas partes declaramos nuestra conformidad con cada una de las cláusulas que anteceden sin que mediare presión de ningún modo y declaramos nuestra completa aceptación con lo suscrito en el presente documento comprometiéndonos a su fiel y estricto cumplimiento. <br> <br>`,
    ciudadYFecha: `Es dado en la ciudad de Oruro a los  06 días del mes de May de 2025.  <br> <br>`
}]

const firmas=[{
    Estructura:`
        <table class="firma">
        <tr>
            <td>${nombre} ${apellidoPaterno} ${apellidoMaterno}</td>
            <td>RESPONSABLE DEL INSTITUTO</td>
        </tr>
        </table>
    `
}]


        






    //Muestra el contenido de articulos con los correspondientes datos al iniciar la pagina
document.addEventListener('DOMContentLoaded', function() {
    texto1erParrafo.innerText =  `${parrafo1p[0]["parte1"]} ${nombre} ${apellidoPaterno} ${apellidoMaterno} ${parrafo1p[0]["parte2"]} ${parrafo1p[0]["parte3"]} ${direccion} ${parrafo1p[0]["parte4"]} ${expedido}* ${parrafo1p[0]["parte5"]} ${ci} ${parrafo1p[0]["parte6"]} ${expedido} ${parrafo1p[0]["parte7M"]}`;// ${0>1 ? "varon" : "mujer"}` ;    
    texto1erArticulo.innerHTML = `${articulo1[0]["parte1"]} ${nombre} ${apellidoPaterno} ${apellidoMaterno} ${articulo1[0]["parte2"]} 
    
    ${articulo1[0]["parte3"]}`

    texto2doArticulo.innerHTML =`${articulo2[0]["parte1"]}

    ${articulo2[0]["parte2"]}

    ${articulo2[0]["parte3"]}

    ${articulo2[0]["parte4"]}`;

    texto3erArticulo.innerHTML= `${articulo3[0]["parte1"]}`;
    tabla.innerHTML = tablita;

    texto4toArticulo.innerHTML = `${articulo4[0]["parte1"]}
    ${articulo4[0]["parte2"]}
    ${articulo4[0]["parte3"]}
    ${articulo4[0]["parte4"]} `;

    textoarticulosDel5Al10.innerHTML=`${articulosDel5Al10[0]["articulo5"]}
    ${articulosDel5Al10[0]["articulo6"]}

    ${articulosDel5Al10[0]["articulo7"]}

    ${articulosDel5Al10[0]["articulo8"]}

    ${articulosDel5Al10[0]["articulo9"]}

    ${articulosDel5Al10[0]["articulo10"]}

    ${articulosDel5Al10[0]["ciudadYFecha"]}
    `;

    textoFirmas.innerHTML= `${firmas[0]["Estructura"]} `



  });





    
    /*      PARA VERIFICAR QUE TODOS LOS VALORES ESTEN LLENADOS
    if( nombre.value =="" ||
        apellido.value =="" || 
        direccion.value =="" || 
        ci.value =="" || 
        expedido.value =="" 
    ){
            tituloConvenio.innerText = "Completar Datos"
    }else{
        tituloConvenio.innerText = "CONVENIO DE SERVICIOS"
        //texto1erParrafo.innerText = `${parrafo1[0]} ${nombre.value} ${apellido.value} ${parrafo1[1]} ${parrafo1[2]} ${direccion.value} ${parrafo1[3]} ${expedido.value}* ${parrafo1[4]} ${ci.value} ${parrafo1[5]} ${expedido.value} ${parrafo1[6]}` ;
        texto1erParrafo.innerText =  `${parrafo1p[0]["parte1"]} ${nombre.value} ${apellido.value} ${parrafo1p[0]["parte2"]} ${parrafo1p[0]["parte3"]} ${direccion.value} ${parrafo1p[0]["parte4"]} ${expedido.value}* ${parrafo1p[0]["parte5"]} ${ci.value} ${parrafo1p[0]["parte6"]} ${expedido.value} ${parrafo1p[0]["parte7M"]} ${0>1 ? "varon" : "mujer"}` ;    
        //texto1erArticulo.innerHTML= `<span class="negrilla">PRIMERA.- (SERVICIOS).- </span> ${articulo1[0]} ${nombre.value} ${apellido.value} ${articulo1[1]}`
        parrafoUno.innerText = `hola` ;    
    }
        */
