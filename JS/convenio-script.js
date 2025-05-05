const nombre = localStorage.getItem('nombre-name');
const apellido = localStorage.getItem('apellido-name');
const direccion = localStorage.getItem('direccion-name');
const ci = localStorage.getItem('ci-name');
const expedido = localStorage.getItem('expedido-name');

//Para que los datos sean obtenidos pero que no sean visibles en la pagina
document.getElementById('nombre-name').textContent = nombre;
document.getElementById('nombre-name').style.display = "none";

document.getElementById('apellido-name').textContent = apellido;
document.getElementById('apellido-name').style.display = "none";

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

//array que contiene la redaccion del 1er Articulo
const articulo1=[{
    parte1: `PRIMERA (SERVICIOS).- La institución Smart Step Associates S.R.L. brindará a: "`,
    parte2: `el servicio de curso de aprendizaje del idioma inglés en base al programa tecnológico “Let’s Do It My Way” de acuerdo a la currícula académica presentada en el documento “Guía de Estudio."`,
    parte3: `El CLIENTE o estudiante al quedar inscrito en el Instituto, asume el compromiso de respetar y cumplir a cabalidad los reglamentos y las normas internas del mismo, entregadas en la mencionada “Guía de Estudio”. `
    }];

//array que contiene la redaccion del 2do Articulo
const articulo2=[{
    parte1: `SEGUNDA. (GUÍA DE ESTUDIO). – La “Guía de Estudio” entregada al estudiante al momento de su inscripción, es una guía explicativa que detalla el contenido del programa académico, los derechos y obligaciones del  estudiante, los permisos académicos, los compromisos asumidos por los mismo, entre otros. Entre los puntos a resaltar mencionamos los siguientes:`,
    parte2: `a) La asistencia mínima será controlada de manera semanal siendo 4 clases obligatorias semanales como mínimo para cada estudiante.`,
    parte3: `b) La nota de aprobación para cada nivel (o STEP) de estudio está definida en 80 puntos sobre 100.`,
    parte4: `c) Las clases inician en un horario en punto, por lo cual el estudiante tendrá la obligación de estar presente en el instituto 5 minutos antes de la hora de su clase y solo tendrá una tolerancia de hasta 5 minutos después de la hora señalada."`
    }];

//array que contiene la redaccion del 2do Articulo
const articulo3=[{
    parte1:`TERCERA. (CURSO O CARRERA Y DURACIÓN). - El estudiante queda inscrito en el siguiente curso(s) o carrera(s): 										`
    }];

//opciones de los cursos a inscribirse
const nombreCursoA='Capacitacio1';


//tabla de articulo 3
const tablita = `
    <table>
        <tr>
            <th>Nombre del estudiante</th>
            <th>Curso al que esta Inscrito</th>
        </tr>
        <tr>
            <td>${nombre} ${apellido}</td>
            <td>${nombreCursoA}</td>
        </tr>
        <tr>
            <td>Jane</td>
            <td>Doe</td>
        </tr>
    </table>
    `;









document.addEventListener('DOMContentLoaded', function() {
    texto1erParrafo.innerText =  `${parrafo1p[0]["parte1"]} ${nombre} ${apellido}  ${parrafo1p[0]["parte2"]} ${parrafo1p[0]["parte3"]} ${direccion} ${parrafo1p[0]["parte4"]} ${expedido}* ${parrafo1p[0]["parte5"]} ${ci} ${parrafo1p[0]["parte6"]} ${expedido} ${parrafo1p[0]["parte7M"]}`;// ${0>1 ? "varon" : "mujer"}` ;    
    texto1erArticulo.innerText = `${articulo1[0]["parte1"]} ${nombre} ${apellido} ${articulo1[0]["parte2"]} 
    
    ${articulo1[0]["parte3"]}`

    texto2doArticulo.innerText =`${articulo2[0]["parte1"]}
    
    ${articulo2[0]["parte2"]}
    
    ${articulo2[0]["parte3"]}
    
    ${articulo2[0]["parte4"]}`;

    texto3erArticulo.innerText= `${articulo3[0]["parte1"]}`;

    tabla.innerHTML = tablita;

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
