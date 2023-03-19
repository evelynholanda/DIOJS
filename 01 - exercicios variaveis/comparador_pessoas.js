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

function comparadorPessoas (p1, p2){
    if (p1.idade > p2.idade) {
        console.log((p1.nome),   " é mais velho que ", (p2.nome));
    } else if (p2.idade > p1.idade) {
        console.log((p2.nome),   "é mais velho que ", (p1.nome));
    } else {
        console.log((p1.nome),   "tem a mesma idade que ", (p2.nome));
    }

    

}


const evelyn = new Pessoa('Evelyn', 36);
const daniella = new Pessoa('Daniella', 36);

comparadorPessoas(evelyn, daniella);