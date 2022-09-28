var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let [a, b, c] = lines.shift().split(" ").map(item => parseInt(item));


let maiorAB = (a + b + Math.abs(a -b)) / 2;


maiorAB > c ?  console.log(`${maiorAB} eh o maior`) :  console.log(`${c} eh o maior`);

/*let maiorXC = (maiorAB + c + Math.abs(c - maiorAB)) / 2;

console.log(`${maiorXC} eh o maior`);
================================================================================
if (maiorAB > c) {
    console.log(`${maiorAB} eh o maior`);
    
}
else{ 
    console.log(`${c} eh o maior`);
 } */