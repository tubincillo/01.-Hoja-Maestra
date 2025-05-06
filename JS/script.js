//Datos principales del usuario

const form = document.getElementById('form');
const nombre=document.querySelector('#nombre');
const apellidoPaterno=document.querySelector('#apellidoPaterno');
const apellidoMaterno=document.querySelector('#apellidoMaterno');
const direccion=document.querySelector('#direccion');
const ci=document.querySelector('#ci');
const expedido=document.querySelector('#expedido');

const botonIngresar=document.querySelector('#boton-ingresar');

const tituloConvenio=document.querySelector('#tituloConvenio');
const texto1erParrafo=document.querySelector('#texto-1erParrafo');
const texto1erArticulo=document.querySelector('#texto-1erArticulo');


form.addEventListener('submit',function(e){
    e.preventDefault();
    const nombreValue = nombre.value;
    const apellidoPaternoValue = apellidoPaterno.value;
    const apellidoMaternoValue = apellidoMaterno.value;
    const direccionValue = direccion.value;
    const ciValue = ci.value;
    const expedidoValue = expedido.value;

    
    localStorage.setItem('nombre-name',nombreValue);
    localStorage.setItem('apellidoPaterno-name',apellidoPaternoValue);
    localStorage.setItem('apellidoMaterno-name',apellidoMaternoValue);
    localStorage.setItem('direccion-name',direccionValue);
    localStorage.setItem('ci-name',ciValue);
    localStorage.setItem('expedido-name',expedidoValue);

    window.location.href = "/webs/convenio.html";
        
})


                




 











