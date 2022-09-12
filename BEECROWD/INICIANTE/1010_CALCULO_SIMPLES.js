/*duas entradas com id da peça, nº de peças e valor da peça
multiplicar o valor da peça com o nº de peças e somar os dois resultados*/
var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let infoProduto1 = lines.shift().split(" ");
let infoProduto2 = lines.shift().split(" ");

let idProduto1 = infoProduto1.shift();
let unidade1 = infoProduto1.shift();
let valor1 = infoProduto1.shift();
let totalProduto1 = valor1 * unidade1;

let idProduto2 = infoProduto2.shift();
let unidade2 = infoProduto2.shift();
let valor2 = infoProduto2.shift();
let totalProduto2 = valor2 * unidade2;

let precoFinal = totalProduto1 + totalProduto2

console.log(`VALOR A PAGAR: R$ ${precoFinal.toFixed(2)}`);




