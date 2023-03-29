//Vocẽ teŕa cinco parametros: (variaveis)

//calcular valo da viagem
/*
1- Preço do etanol;
2- Preço da gasolina;
3- tipo de combustível que ta no seu carro;
4- gasto médio de combustível do carro por km;
5- distancia em km da viagem


Imprima no console valor que será gasto para realizar a viagem; */



const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitro = 10;
const distanciaKm = 100;
const carroCombustivel = "gasolina";


const litros = (distanciaKm / kmPorLitro)

if (carroCombustivel === "gasolina") {
    const valorGasto = litros * precoGasolina;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = litros * precoEtanol;
    console.log(valorGasto.toFixed(2));
}


