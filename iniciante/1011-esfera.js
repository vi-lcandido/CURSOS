var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let raio = parseFloat(lines.shift());
let pi = Math.PI.toFixed(5);

let volumeEsfera = (4/3) * pi * Math.pow(raio,3);

console.log(`VOLUME = ${volumeEsfera.toFixed(3)}`);