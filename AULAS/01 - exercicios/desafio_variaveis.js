
//Declaração de variáveis
//operadores lógicos +,-,/,*

//ESSE PROHRAMA CALCULA O CONSUMO DE COMBUSTÍVEL E GASTO DE UMA VIAGEM



/*Faça um programa para calcular o valor de uma viagem

Vocẽ teŕa três parametros: (variaveis)

1- Preço do combustível;
2- Valor médio de combustível do carro por km;
3- distancia em km da viagem;

Imprima no console valor gasto com gasto de combustível para realizar  a viagem */

const precoCombustivel = 5.79;
const kmPorLitro = 12;
const distanciaKm = 1580;

const litrosConsumidos = distanciaKm / kmPorLitro;
const valorTotalGasto = litrosConsumidos * precoCombustivel;

console.log("O valor total da viagem foi de: " + valorTotalGasto.toFixed(2));