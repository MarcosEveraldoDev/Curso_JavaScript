//Herança em JavaScript :

// criando a classe pai ou objeto pai
function Animal(nome, raca) {
  this.nome = nome;
  this.raca = raca;
}

// definindo os métodos da classe pai ou objeto pai
Animal.prototype.andar = function () {
  console.log("Andando...");
};

Animal.prototype.comer = function () {
  console.log("Comendo...");
};

// criando a classe filha ou objeto filho
function Gato(nome, raca, cor) {
  Animal.call(this, nome, raca);
  this.cor = cor;
}


// realizando a herança entre as classes pai e filha ou objeto pai e filho
Gato.prototype = Object.create(Animal.prototype);

// definindo o construtor da classe filha ou objeto filho
Gato.prototype.constructor = Gato;

// definindo os métodos da classe filha ou objeto filho
Gato.prototype.miar = function () {
  return console.log("Miau! Miau!");
}

// intanciando objetos da classe pai ou objeto pai
const canguru = new Animal("Canguru", "Mamifero");

// instanciando objetos da classe filha ou objeto filho
let gato = new Gato("Mimi", "Persa", "Preto");


gato.andar();
gato.miar();
console.log(gato);

console.log("--------------------------------------");

canguru.andar();
console.log(canguru);
