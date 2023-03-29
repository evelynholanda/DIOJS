const funcoes = require('./get_prints');

//console.log(funcoes.gets());

const pessoa = {
    nome: "victor"
};

//esses dois códigos sao equivalentes
const { nome } = pessoa; 
const nome = pessoa.nome;