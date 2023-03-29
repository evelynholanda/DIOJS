/*const { gets, print } = require('./get_prints');

//print(gets());
//colocar todas as entradas na lista e ve quem é o maior

const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numerosSorteado = gets();
    numerosSorteados.push(numerosSorteado);
    
}


let maiorValor = 0;

for (let i = 0; i  < numerosSorteados.length; i++) {
    const numerosSorteado = numerosSorteados[i];
    if (numerosSorteado > maiorValor) {
        maiorValor = numerosSorteado;
    }
    
}


print(numerosSorteados);
print("O maior valor da lista de array é : " + maiorValor);*/


//outra forma de fazer com menos códifo seria:

const { gets, print } = require('./get_prints');

//print(gets());
//colocar todas as entradas na lista e ve quem é o maior
const quantidadeDeAlunos = gets();
let maiorValorEncontrado = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numerosSorteado = gets();
    if (numerosSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numerosSorteado;
    }
}


print("O maior valor da lista de array é : " + maiorValorEncontrado);







