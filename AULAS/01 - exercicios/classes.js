
//ela define os atributos de pessoas para poderem ser instanciadas
//ou seja pessoa é uma classe que descreve como ser uma pessoa

//classe- definição do que é o objeto
//instancia é uma ocorrencia daquela classe

class Pessoa {
    nome;
    idade;

    descrever () {
        console.log(this.nome, this.idade);
          
    }
}

//tipos de pessoas ou intancias de pessoas
    const evelyn = new Pessoa();
    evelyn.nome = "Evelyn";
    evelyn.idade = 53;

    const daniella = new Pessoa();
    daniella.nome = "Daniella";
    daniella.idade = 26;

   

    evelyn.descrever();
    daniella.descrever();
    console.log(evelyn, daniella);
