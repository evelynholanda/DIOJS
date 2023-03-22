//criar classe par representar carros:
//carro = marca, cor, gasto combustivel
//crie um método que dado a quantidade de km e o preço de combustível nos de o valor gasto em reais para realizar o percurso



//definição de carro e atributos- sempre que criar uma classe precisa criar um método construtor
class Carro {

    marca;
    cor;
    gastoMedio;

//ele tem capacidade de calcular- metodo
    constructor(marca, cor, gastoMedio) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
       
    }
//metodo tem retorno
    calculoViagem (km, valor) {

        return  km * this.gastoMedio * valor;
      
    
    } 
}
            

//instanciando novos carros

const c30 = new Carro();
c30.marca = "Audi";
c30.cor = "Branci";
c30.gastoMedio = 1 / 12;

const palio = new Carro();
palio.marca = "Fiat";
palio.cor = "Preto";
palio.gastoMedio = 1 / 10;

//mostrar no console
console.log(c30.calculoViagem(70, 5));
console.log(palio.calculoViagem(70, 5));





       

