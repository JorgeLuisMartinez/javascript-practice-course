# Test
##### Este archivo contiene una serie de ejercicios resueltos para practicar conceptos basicos de javascript.
## variables
```
var name = "Jorge";
var lastName = "Martinez";
var userName = "Chainsaw coder";
var age = 23;
var email = "Jorge389.jm@gmail.com";
var adult = true;
var savedMoney = 38000;
var debMoney = 700000;

var fullName = name + " "+lastName;
var realMoney = savedMoney - debMoney;
console.log("Nombre completo: "+fullName+ " Dinero real: "+realMoney);
```
## funcion:
```
function datosPersonales (name, lastName, nickName){
    var completeName = name + " "+lastName;
  	console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + 		     	nickName + ".");
}

datosPersonales("jorge", "martinez", "chainsawCoder");
```
## Condicionales:
```
function tipoDeSuscripcion(tipo) {
    if (tipo == "free") {
        console.log("Solo puedes tomar los cursos gratis");
    } else if(tipo == "basic"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    } else if(tipo == "expert"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    } else if(tipo == "expert plus"){
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    } else {
        console.log("No existe ese tipo de supscripcion, intenta con estas: free / basic / expert / expert plus");
    }
} 

tipoDeSuscripcion("free");
```
##### BONUS EXTRA: resumir la respuesta anterior en un if, para este caso lo mejor es usar un objeto
```
var suscripcion = {
    free: "Solo puedes tomar los cursos gratis",
    basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    expertPlus: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
}
function tipoDeSuscripcion(userSuscription) {
    const respuesta = suscripcion[userSuscription] || console.warn("No existe ese tipo de supscripcion, intenta con estas: free / basic / expert / expertPlus")
    console.log(respuesta);   
}
```
##### otra forma de realizar este BONUS EXTRA:
```
function tipoDeSuscripcion(userSuscription) {
    if (suscripcion[userSuscription]) {
        console.log(suscripcion[userSuscription]);
        return;
    }   
    console.warn("No existe ese tipo de supscripcion, intenta con estas: free / basic / expert / expertPlus");
}
```
##### una ultima forma de realizar este BONUS EXTRA:
```
function tipoDeSuscripcion(userSuscription) {
    var respuesta = suscripcion[userSuscription] ? console.log(suscripcion[userSuscription]) : console.warn("No existe ese tipo de supscripcion, intenta con estas: free / basic / expert / expertPlus");
}
tipoDeSuscripcion("free");
tipoDeSuscripcion("basic");
tipoDeSuscripcion("expert");
tipoDeSuscripcion("expertPlus");
```
## ciclos:
#####  Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
```
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
```
```
var i = 0;

while (i < 5) {
    console.log("El valor de i es: " + i);
    i++;
}
var i = 10;

while (i >= 2) {
    console.log("El valor de i es: " + i);
    i++;
}
```
##### Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

```
var respuesta;

while(respuesta != "4"){
    var pregunta = prompt("Estas en un bucle atrapado, para escapar debes escribir la solucion del problema, ¿Cuanto es dos mas dos?: ")
    respuesta = pregunta;
}
alert("lograste escapar");
```
##### otra forma de hacerlo:
```
function bucle () {
    var respuesta = prompt("Estas en un bucle atrapado, para escapar debes escribir la solucion del problema, ¿Cuanto es dos mas dos?: ")
    if (respuesta != 4) {
        alert("vuelve a intentarlo");
        bucle();
    } else {
        alert("felicidades lograste escapar");
    }
}
bucle();
```
## Listas:
##### Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
```
var array = ["uno", "dos", "tres"];

function primerElemento(array) {
    console.log(array[0]);
}
primerElemento(array);
```
##### Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
```
function cadaElemento(arraySecreto) {
    for (let index = 0; index < arraySecreto.length; index++) {
        console.log(arraySecreto[index]);
    }
}

cadaElemento(["uno", "dos", "tres"])
```
##### otra forma de hacerlo:
```
function imprCe(array) {
    array.forEach(element => {
        console.log(element);
    });
}

imprCe(["uno", "dos", "tres"]);
```
##### Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
```
var objetoEj = {
    nombre: "maria",
    nombre2: "juan",
    nombre3: "jose",
    nombre4: "carlos"
}

function imprimirObjt(objeto) {
    for (const key in objeto) {
        console.log(key + ":" + objeto[key]);
    }
}
imprimirObjt(objetoEj);
```
###### Dev by: BlazarMarkarian