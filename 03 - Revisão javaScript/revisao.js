// cometário de uma linha

/*
comentário em bloco
*/

//variaveis
//  var => Náo usa no dia a dia
let nome = "Matheus";
const idade = 24;

// nome = "teste"
// idade = 24; não é possível atribuir constante

// operadores
const soma = 2 + 2
const subtracao = 2 - 2
const multiplicacao = 2 * 2
const divisao = 2 / 2
const resto = 3 % 2

// operadores de comparação
const igual = 2 == 2
const diferente = 3 != 2
const maior = 3 > 2
const menor = 2 < 3
const maiorOuIgual= 2 >= 2
const menorOuIgual= 3<=2

//  Estruturas consdições
if (idade >=18) {
    console.log("é maior de idade")
}

if (idade >=18) {
    console.log("é maior de idade")
}
else {
    console.log ("é menor de idade")
    }
    //  operador térnario

    const mensagem = idade >= 18 ? "maior de Idade" : "menor de idade"
    console.log ("mensagem->", mensagem)

    // arrays - listas

    const carros = ["Uno", "Gol", "Voyage"]

    console.log(carros(0))
    console.log(carros(1)) 

    console.log("Quantas frutas tem no array")
    console.log (carros.length)

    frutas.push("Laranja")
    console.log("E agora quantas frutas tem no meu array")
    console.log(carros.length)

    carros.forEach(carro => console.log(carro))

    carros.pop