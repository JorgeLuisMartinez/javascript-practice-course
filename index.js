// querySelector: muy similar a css ej: h1{color : red}  .parrafito{background: red}  #pid{...}
const h1 = document.querySelector("h1");
const p = document.querySelector("p");
// si queremos acceder a un elemento en especifico que tenga una clase o un ID solo debemos seguir la regla de selectores de css
const parrafito = document.querySelector(".parrafito");
const pId = document.querySelector("#pid");
const input = document.querySelector("input");

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pId,
    input,
});
