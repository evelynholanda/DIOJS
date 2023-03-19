
//classe é um contrato de como eve ser uma pessoa
class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    //constructor:
    //se tiver um construtor ele vai sempre pegar os atributos do construtor antes de olhar a classe
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() {
        console.log(this.nome, this.idade);

    }
}

//tipos de pessoas ou intancias de pessoas
const evelyn = new Pessoa('Evelyn', 54);
const daniella = new Pessoa('Daniella', 26);


//evelyn.descrever();
//daniella.descrever();

console.log(evelyn)
console.log(daniella)




