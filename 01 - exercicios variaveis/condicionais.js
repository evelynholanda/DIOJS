// condicionais
// operadores <, >, <=. >=
// true e false (bolean)

//Numero par ou impar....se sobrar resto impar , se não é par ( 0 e 1)
/*const numero = 5;
const NumeroPar =  numero % 2;

console.log(NumeroPar);*/



//clacula resto da divisao e ve se o numero 0 ou 1 é par ou maior que 0
// === ( 1 pra atribuição, 2 pra igualdade e 3 igual p comparar igualdade)
//2 igual coverte para texto- ou seja um número nunca vai ser igual a um texto


/*const numero2 = 11;
const NumeroPar =  (numero2 % 2) === 0;*/


/*const numero = 0;

const numeroPar = (numero % 2) === 0;


if (numeroPar) {
    console.log("Par");

} else {

    console.log("Impar");

}*/

//Se o numero é divisivel por 5

/*const numero = 15;

const numeroDivisivelPor5 = (numero % 5) === 0;


if (numeroDivisivelPor5) {
    console.log("Sim é divisivel por 5");

} else {

    console.log("Não é divisivel por 5");


}*/

/*
const numero = 9;
//se o resto for = a zero que a resposta é sim ou não
const numeroDivisivelPor5 = (numero % 5) === 0;


if (numero === 0) {
    console.log("Numero inválido");

} else if (numeroDivisivelPor5) {
    console.log("Sim");
} else {

    console.log("Não");
}*/


/*
const numero = 10;

if ((numero % 5) === 0) {
    console.log("Numero é par");

} else {
    console.log("Numero é impar");

}*/

//Quando a consicional é complexza é melhor colocar dentro de uma variavelconst numero = 10;
//Fica mais clean

const numero = 4;
const isnumeroPar = (numero % 2) === 0

if (isnumeroPar) {
    console.log("Numero é par");

} else {
    console.log("Numero é impar");

}