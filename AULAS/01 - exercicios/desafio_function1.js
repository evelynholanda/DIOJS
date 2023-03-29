

/*function main(){
    console.log("Programa Principal")
}
main();*/



/*Abaixo de 18.5 = "abaxio do peso";
entre 18.5 e 25 = "peso normal";
entre 25 e 30 = "acima do peso";
entre 30 e 40 = "obeso";
acima de 40 = "obesidade morbida grave";*/

//testando commit

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);//teste
}

const peso = 80;
const altura = 1.60;
const imc = calcularImc(peso, altura);
console.log(imc);


if (imc < 18.5) {
    console.log("Você esta abaixo do peso");
}

else if (imc >= 18.5 && imc < 25) {
    console.log("Você esta peso normal");

}

else if (imc >= 25 && imc < 30) {
    console.log("Você esta acima do peso");

} else if (imc >= 30 && imc < 40)
    console.log("Você esta obeso");

else
    console.log("Você esta com obesidade morbida grave")

