// cometário de uma linha

/*
comentário em bloco
*/

//variaveis
//  var => Náo usa no dia a dia

/*
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

    const carros = {"Uno", "Gol", "Voyage"}

    console.log(carros(0))
    console.log(carros(1)) 

    console.log("Quantos carros tem no array")
    console.log (carros.length)

    carros.push("palio")
    console.log("E agora quantos carros tem no meu array")
    console.log(carros.length)

    carros.forEach(carro => console.log(carro))

    carros.pop
    console.log(carros)
    */

    // objetos
    let pessoa = {
        nome: "Gustavo",
        idade: 30,
        peso: 80,
        altura: 170
    }

    console.log(pessoa.nome)

    pessoa.idade = 40
    console.log(pessoa.idade)

    // desatribuição de objetos

    const {peso, altura} = pessoa
    console.log(peso)
    console.log(altura)

    // propagação de objetos

    const endereco= {
        cidade: "Brasília",
        uf:"DF"
    }
    const pessoaCompleto = {
        ...pessoa,
        ...endereco,
    }
    console.log(pessoaCompleto)
                                                                                                                                                                                                                                                
    // funções
    function somar(numA, numB) {
        const resultado = numA + numB
        console.log(resultado)
    }

    // uso
    somar(2,2)
    somar(3,3)
    somar(10,5)
    
    // função anonima
    const subtrair = function (numA, numB){
        const resultado = numA - numB
        console.log(resultado)
    }
    subtrair(6.2)

    // arrow funtion
    const multiplicar = (numA, numB) => numA * numB

    multiplicar(2,2)
    // importar função de outro arquivo

    import {calcularIMC} from "./CalculadoraIMC"

    // modo de import padrão do node
    // const CalculadoraIMC = require("./CalculadoraIMC")

    const res = calcularIMC(80,170)

    console.log(res)
