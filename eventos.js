const primerNum = document.getElementById('calculo1');
const segundoNum = document.getElementById('calculo2');
const botonCalcular = document.getElementById('btnCalcular');
const resultado = document.getElementById('result');

//escuchar eventos de la forma: Llamando la funcion desde el html, el escuchador esta en el html

function escucharBtn() {
    // convertir los strings que devuelve el .value a numeros con Number() o parseInt()
    let suma = Number(primerNum.value) + parseInt(segundoNum.value)
    resultado.innerText = "Resultado: " + suma;
}


