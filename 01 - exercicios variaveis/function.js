/* começa com palavra reservada function, depois recebe um parametro () e no fim você chama esta função*/
/* funções que n tem retorno, que não devolvem nada, sao chamadas de procedimentos*/


/*function myName(name) {

    console.log("My name is : " + name);
}

myName("Evelyn");
myName("Rodrigo");*/
/* Esta função tem retorno*/
/*function quadrado(valor) {
    return valor * valor
}
//teste commit

const quadradoDeDez = quadrado(10) + (quadrado(10))
console.log(quadradoDeDez);*/
//teste
function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros /100) * valor;
    return valor + valorDeAcrescimo;
}

console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));