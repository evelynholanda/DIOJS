/* calcular IMC de uma pessoa*/
/*Faça um algorítmo que dado o peso e altura de um adulto sua condição de acordo com a tabela abaixo*/

/*dado o peso e altura de um adulto a condição será satisfeita de acordo com a tabela abaixo*/

/*Condição:
Abaixo de 18.5 = "abaxio do peso";
entre 18.5 e 25 = "peso normal";
entre 25 e 30 = "acima do peso";
entre 30 e 40 = "obeso";
acima de 40 = "obesidade morbida grave";*/

let peso= 120;
let altura = 1.20;

const calculoImc = peso / (altura + altura);
console.log (calculoImc.toFixed(2));

if (calculoImc < 18.5) {
    console.log("Você esta abaixo do peso");
}
else if (calculoImc >= 18.5 && calculoImc < 25) {
    console.log("Você esta peso normal");
}

else if (calculoImc >= 25 && calculoImc < 30) {
    console.log("Você esta acima do peso");
}

else if (calculoImc >= 30 && calculoImc < 40) {
        console.log("Você esta obeso");

} else  
    console.log("Você esta com obesidade morbida grave");
