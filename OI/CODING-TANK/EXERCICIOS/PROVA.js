// IMC = peso/altura^2
/*A) media de altura vai ser a soma das alturas dividido pela quantidade de elementos
B) media de peso vai ser a soma das alturas dividido pela quantidade de elementos
C) relacionar cada nome com o seu respectivo IMC (cada peso tem que ser elevado ao quadrado)
D) 
*/
const dadosPessoas = [ 
    ['Ana', 'Paulo', 'Márcia', 'Pedro', 'Beatriz'], 
    [1.70, 1.72, 1.62, 1.90, 1.53], 
    [80, 90, 61, 84, 49] 
]

var nome = dadosPessoas[0]
var altura = dadosPessoas[1]
var peso = dadosPessoas[2]
var mediaAltura = 0
var mediaPeso = 0
var maiorAltura = 0
// var imc = 0
// var maiorPeso = dadosPessoas[2]
// var maiorImc = 

for (let index1 = 0; index1 < nome.length; index1++) {
    mediaAltura += altura[index1]/altura.length
    mediaPeso += peso[index1]/peso.length
}
console.log(`A média da altura é: ${mediaAltura} m`)
console.log(`A média do peso é: ${mediaPeso} kg`)

for (let index2 = 0; index2 < nome.length; index2++) {
    console.log(`A ${nome[index2]} tem IMC: `)
    for (let index3 = 0; index3 < nome.length; index3++) {
        var imc = 0
        imc = peso[index3]/Math.pow(altura[index3], 2)
    }
    console.log(imc)
    
}
