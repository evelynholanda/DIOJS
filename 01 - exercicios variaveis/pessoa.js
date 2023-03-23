//criar classe p representar pessoas
//pessoas tem atributos: nome, peso e altura
// programa vai dizer dizer o IMC da pessoa instanciada ( IMC = peso / (altura * altura));
//instanciar pessoa José = 70kg, 1.75 altura, Jose dizer IMC


//classe e construtor- lembrar classe nome maiusculo
class Pessoa {
    nome;
    peso;
    altura;

    construtor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;

    }
//metodo que calcula IMC- calcula direto com o this.
    calcularImc() {
    
        return this.peso / (this.altura * this.altura);
    }

    classificarImc() {
        const imc = this.calcularImc();

        if (imc < 18.5) {
        return("Você esta abaixo do peso");
}
        else if (imc >= 18.5 && imc< 25) {
        return("Você esta peso normal");
}

        else if (imc >= 25 && imc< 30) {
        return("Você esta acima do peso");
}

        else if (imc >= 30 && imc < 40) {
        return("Você esta obeso");

}       else 
        return("Você esta com obesidade morbida grave");

    
    }
}
        
//instancia da classe pessoa
const jose = new Pessoa();
jose.nome = "Jose";
jose.peso = 50;
jose.altura = 1.75;

const victor = new Pessoa();
victor.nome = "Victor";
victor.peso = 90;
victor.altura = 1.60;


console.log(jose);
console.log(jose.calcularImc());
console.log(jose.classificarImc());


console.log(victor);
console.log(victor.calcularImc());
console.log(victor.classificarImc());

