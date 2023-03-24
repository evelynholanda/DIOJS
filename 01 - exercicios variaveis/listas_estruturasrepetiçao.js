//estrutura de repetição para percorrer dinamicamente o array - for
//for tem 3 parametros = primeiro declara a variavel, depois a condiçao e depois o incremento da variavel

const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(8);
notas.push(8);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
   
    
}
const media = soma / notas.length;
console.log(soma);
console.log(media);

    


