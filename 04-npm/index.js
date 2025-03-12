// codifo para executar o projeto

// importar o modulo
import {calcularIMC,tabelaIMC} from "./calculadoraIMC.js"

console.log(">>> Calculadora IMC <<<")
console.table(tabelaIMC)

const peso= 80
const altura = 1.70

const resultado = calcularIMC(peso,altura)

console.log("resultado IMC: ")
console.log(resultado.toFixed(2))

// importar um modulo externo, uma biblioteca
import moment from "moment"

const hoje = moment().locale('pt-br')

console.log("Data:")
console.log(hoje.format("DD/MM/YYYY"))