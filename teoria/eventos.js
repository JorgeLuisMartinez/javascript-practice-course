const primerNum = document.getElementById('calculo1');
const segundoNum = document.getElementById('calculo2');
const botonCalcular = document.getElementById('btnCalcular');
const botonCalcular2 = document.getElementById('btnCalcular2');
const resultado = document.getElementById('result');
const form = document.querySelector('#formulario');
//para los formularios la cosa cambia, puesto que si el boton final que este dentro de la etiqueta formulario en html, siempre tendra naturaleza submit 
form.addEventListener('submit', sumarInputs);


//Como escuchar desde javascript, nota: el addEventListener recibe dos parametros, que son el evento que queremos que escuche y la funcion que deseamos que llame, pero esta funcion, no debe ir con parentesis al final
botonCalcular2.addEventListener('click', escucharBtn);

//escuchar eventos de la forma: Llamando la funcion desde el html, el escuchador esta en el html
function escucharBtn() {
    // convertir los strings que devuelve el .value a numeros con Number() o parseInt()
    let suma = Number(primerNum.value) + parseInt(segundoNum.value)
    resultado.innerText = "Resultado: " + suma;
}


//añado la misma funcion solo condiferente nombre para el ejemplo
function sumarInputs(event) {
    //con esta sentencia evitamos que el utlimo boton de un formulario que tiene el evento por defecto de recargar la pagina y enviar la ruta, no lo haga
    event.preventDefault();
    let suma = Number(primerNum.value) + parseInt(segundoNum.value)
    resultado.innerText = "Resultado: " + suma;
}