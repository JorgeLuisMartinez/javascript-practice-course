// querySelector: muy similar a css ej: h1{color : red}  .parrafito{background: red}  #pid{...}
const h1 = document.querySelector("h1");
const p = document.querySelector("p");
// si queremos acceder a un elemento en especifico que tenga una clase o un ID solo debemos seguir la regla de selectores de css
const parrafito = document.querySelector(".parrafito");
const pId = document.getElementById("pid");
const input = document.querySelector("input");

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pId,
    input,
});
// inner html abarca tambien codigo html, lo que puede hacer que nuestro proyecto sea vulnerable ya que tambie se puede inyectar codigo dentro de este
h1.innerHTML = 'Prueba <br> segunda linea'
//Lo que podemos hacer es especificar con la etiqueta inner que vamos a cambiar en este caso texto
h1.innerText = 'Prueba <br> segunda linea'
//esta etiqueta ya no reconoce html, por ende imprime todo como si fuera un string común

//forma normal de modificar un atributto
/*console.log(h1.getAttribute("pantalla"));         //nos ayuda a leer, algunos de los atributos que tenga el elemento
h1.setAttribute('class', 'rojo');   */      //nos permite modificar atributos de los elementos html, cambiar el nombre de una clase por ejemplo...

//hay otra funccion que solo para clases. classList
h1.classList.add('rojo') //para añadir 
h1.classList.remove('verde') // para remover 
h1.classList.toggle('verde') // dpendiendo de si tiene la clase o no agrega o remueve
h1.classList.contains('verde') // devuelve true o false si tenemos o no la clase que estamos preguntando.

//forma de acceder al valor de un elemento
input.value = "456"

//con esta sentencia podemos crear nuevos elementos de html...
let img = document.createElement("img");
//podemos agregar atributos en este caso que es una imagen debemos indicar la ruta de la imagen
img.setAttribute('src','https://images.pexels.com/photos/16511744/pexels-photo-16511744.jpeg')
img.setAttribute('width','100px')
img.setAttribute('height','100px')
console.log(img);
//y con esta funcion append indicamos dentro de que elemento html queremos insertar la imagen este caso en el elemento por nombre pId

pId.replaceWith(img)
