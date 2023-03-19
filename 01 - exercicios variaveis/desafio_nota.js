/* Fazer algoritmo que dado 3 notas tiradas um aluno calclcule e imprima a sua média e sua classificação
Média = (nota1 + nota 2 = nota 3) / 3);

Classificação
média , 5, reprovado
media entre 5 a 7, recuperação
media acima de 7, passou*/



const nota1 = 10; 

const nota2 = 10;
;

const nota3 = 7;


const media = (nota1 + nota2 + nota3) / 3;
console.log("Sua média é de: " + media.toFixed(2));

if (media < 5) {
    console.log("Você esta reprovado");
}

else if (media >= 5 && media <=6) {
    console.log("Você esta em recuperação");


} else  
    console.log("Você esta aprovado");

