var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let comprimentos = lines.shift().split(" ");
const A = parseFloat(comprimentos.shift());
const B = parseFloat(comprimentos.shift());
const C = parseFloat(comprimentos.shift());

const pi = 3.14159

let triangulo = (A * C) / 2;
let circulo = pi * Math.pow(C,2)
let trapezio = ((A + B) * C) / 2;
let quadrado = Math.pow(B, 2);
let retangulo = A * B;


console.log(`TRIANGULO = ${triangulo.toFixed(3)}`);
console.log(`CIRCULO = ${circulo.toFixed(3)}`);
console.log(`TRAPEZIO = ${trapezio.toFixed(3)}`);
console.log(`QUADRADO = ${quadrado.toFixed(3)}`);
console.log(`RETANGULO = ${retangulo.toFixed(3)}`);

// for (let index = 0; index < comprimentos.length; index++) {
    

    
    
    
// }
