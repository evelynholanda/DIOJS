
//função que calcula o imc
function calcularImc(peso, altura) {
    return calcularImc = peso / (altura + altura);


}

//teste commit//teste
// função que classifica Imc
function classificarImc(imc) {


    if (imc < 18.5) {
        return "Você esta abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        return "Você esta peso normal";

    } else if (imc >= 25 && imc < 30) {
        return "Você esta acima do peso";

    } else if (imc >= 30 && imc < 40) {
        return "Você esta obeso";

    } else {
        return "Você esta com obesidade morbida grave";
    }
}

// função principal que faz calculo direcionando p as funções criadas
function main() {
    const peso = 80;
    const altura = 1.60;
    const imc = calcularImc(peso, altura);

    console.log("Seu peso em quilogramas é de:  " + calcularImc);
    console.log(classificarImc(imc));
}

//chamando função principal
main();
