/*Leia os quatro valores correspondentes aos eixos x e y de dois pontos quaisquer no plano, p1(x1,y1) e p2(x2,y2) e calcule a distância entre eles, mostrando 4 casas decimais após a vírgula, segundo a fórmula:
Distância: raizquadrada((x2-x1)^2 + (y2-y1)^2);

Entrada
O arquivo de entrada contém duas linhas de dados. A primeira linha contém dois valores de ponto flutuante: x1 y1 e a segunda linha contém dois valores de ponto flutuante x2 y2.

Saída
Calcule e imprima o valor da distância segundo a fórmula fornecida, com 4 casas após o ponto decimal.*/



var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let [x1, y1] = lines[0].split(" ");
let [x2, y2] = lines[1].split(" ");

let distancia = Math.hypot(x2 - x1, y2 - y1);

console.log(distancia.toFixed(4));
