//para utilizar o import precisa ter o packcage.json
//mas voce pode usar o node.js

//no dio tem gets (INPUT) e prints (CONSOLE.LOG)


/*

    Uma sala contem 5 alunos e para cada aluno foi sorteado um numero de 1 -100;
    Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior numero sorteado.


    Dados de entrada:
    5
    50
    10
    98
    23

    saida
    98
*/

//array com entradas
const entradas = [10, 5, 50, 10, 98, 23, 33, 44, 99, 1, 7, 20, 45];

let i = 0;


function gets() {
    const valor = entradas[i];
    i++;
    return valor;

}


function print(texto) {
    console.log(texto);
}

module.exports = { gets, print};

//exportando o objeto que tem função gets e print
// a gente importa o que exporta

