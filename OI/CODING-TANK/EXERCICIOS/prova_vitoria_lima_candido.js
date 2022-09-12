const dadosPessoas = [
    ['Ana', 'Paulo', 'Márcia', 'Pedro', 'Beatriz'], 
    [1.70, 1.72, 1.62, 1.90, 1.53], 
    [80, 90, 61, 84, 49]
]

let altura = dadosPessoas[1]
let peso = dadosPessoas [2]

let pessoaMaisAlta = dadosPessoas[1][0]
let pessoaMaisBaixa = dadosPessoas[1][0]

let pessoaMaisPesada = dadosPessoas[2][0]
let pessoaMaisLeve = dadosPessoas[2][0]

let indexPessoaMaisAlta = 0
let indexPessoaMaisBaixa = 0
let indexPessoaMaisPesada = 0
let indexPessoaMaisLeve = 0
let indexPessoaMaiorIMC = 0
let indexPessoaMenorIMC = 0

let mediaAltura = 0
let mediaPeso = 0
let maiorImc = 0
let menorImc = 0

let imcs = []

for (let index = 0; index < dadosPessoas[0].length; index++) {
    mediaAltura += dadosPessoas[1][index] / altura.length
    mediaPeso += dadosPessoas[2][index]/ peso.length

    let imc = dadosPessoas[2][index] / Math.pow(dadosPessoas[1][index], 2)
    
    
    if (pessoaMaisAlta <= dadosPessoas[1][index]) {
        pessoaMaisAlta = dadosPessoas[1][index]
        indexPessoaMaisAlta = index
    }
    if (pessoaMaisBaixa >= dadosPessoas[1][index]) {
        pessoaMaisBaixa = dadosPessoas[1][index]
        indexPessoaMaisBaixa = index
    }

    if (pessoaMaisPesada <= dadosPessoas[2][index]) {
        pessoaMaisPesada = dadosPessoas[2][index]
        indexPessoaMaisPesada = index
    }
    if (pessoaMaisLeve >= dadosPessoas[2][index]) {
        pessoaMaisLeve = dadosPessoas[2][index]
        indexPessoaMaisLeve = index
    }

    if (maiorImc <= imc) {
        maiorImc = imc
        indexPessoaMaiorIMC = index
    }
    if (menorImc >= imc) {
        menorImc = imc
        indexPessoaMenorIMC = index
    }



    console.log(`O IMC de ${dadosPessoas[0][index]} é: ${imc}`);
    imcs.push(imc)
}

console.log("\n");

console.log(`Altura média é: ${mediaAltura}`);
console.log(`Peso médio é: ${mediaPeso} \n`);


console.log(`Pessoa mais alta é: ${dadosPessoas[0][indexPessoaMaisAlta]} com ${dadosPessoas[1][indexPessoaMaisAlta]}`);
console.log(`Pessoa mais baixa é: ${dadosPessoas[0][indexPessoaMaisBaixa]} com ${dadosPessoas[1][indexPessoaMaisBaixa]} \n `);

console.log(`Pessoa mais pesada é: ${dadosPessoas[0][indexPessoaMaisAlta]} com ${dadosPessoas[1][indexPessoaMaisAlta]}`"Pessoa mais pesada é: " + dadosPessoas[0][indexPessoaMaisPesada] + " com " + dadosPessoas[2][indexPessoaMaisPesada]);
console.log("Pessoa mais leve é: " + dadosPessoas[0][indexPessoaMaisLeve] + " com " + dadosPessoas[2][indexPessoaMaisLeve] + "\n");

console.log("Pessoa com maior IMC é: " + dadosPessoas[0][indexPessoaMaiorIMC] + " com " + imcs[indexPessoaMaiorIMC]);
console.log("Pessoa menor IMC é: " + dadosPessoas[0][indexPessoaMenorIMC] + " com " + imcs[indexPessoaMenorIMC] + "\n");

