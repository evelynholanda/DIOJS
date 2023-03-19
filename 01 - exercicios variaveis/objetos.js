//ojbeto - coleção de valores com chave e valor - representado por {}
//se colocar uma função dentro de um objeto quer dizer que agora voce tem um método
//objeto literais

const pessoa = {
    nome: 'Ana Evelyn',
    idade: 53,
    

    descrever: function () {
        console.log(this.nome, this.idade);
        
        
    }

};


pessoa.descrever();
//acessando atraves de um atributo de forma dinamica

//mesma forma de incrementar 
pessoa['nome'] = 'teste' //- dinamico
pessoa.nome ='teste' //- acesso direto

console.log(pessoa['nome']);
console.log(pessoa['idade']);

//retirando e colocando objetos
//pessoa.altura = 1.65

//delete pessoa.nome;

