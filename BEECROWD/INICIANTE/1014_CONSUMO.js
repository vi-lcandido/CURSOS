const input = require('fs').readFileSync('stdin', 'utf8');
const [distancia, gasto] = input.split('\n'); 

let consumoTotal = parseInt(distancia) / parseFloat(gasto)

console.log(`${consumoTotal.toFixed(3)} km/l`);