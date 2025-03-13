import {somar, subtrair, multiplicar, dividir} from "./calculadorabasica.js"

const a = 10
const b = 5

console.log("O resultado da soma dos dois números é: ", somar(a,b));
console.log("O resultado da subtração dos dois números é: ", subtrair(a,b));
console.log("O resultado da multiplicação dos dois números é: ", multiplicar(a,b));
console.log("O resultado da divisão dos dois números é: ", dividir(a,b));

// importar um modulo externo, uma biblioteca

import moment from 'moment';
function calcularIdade(anoNascimento) {
    return hoje - anoNascimento}
// implemente a lógica para calcular a idade
const anoNascimento = 1990;
const hoje = moment().year();

console.log("Idade:", calcularIdade (anoNascimento, hoje), "anos");
