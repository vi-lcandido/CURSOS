var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let [idProduto1, unidade1, valor1] = lines.shift().split(" ");
let totalProduto1 = valor1 * unidade1;


let [idProduto2, unidade2, valor2] = lines.shift().split(" ");
let totalProduto2 = valor2 * unidade2;

let precoFinal = totalProduto1 + totalProduto2

console.log(`VALOR A PAGAR: R$ ${precoFinal.toFixed(2)}`);
