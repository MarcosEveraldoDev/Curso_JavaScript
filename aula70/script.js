// //Manipulação de prototype

// const objA = {
//   a: 1,
// };
// const objB = {
//   b: 2,
// };

// const objC = {
//   c: "A",
// };

// Object.setPrototypeOf(objB, objA);
// Object.setPrototypeOf(objC, objB);

// console.log(objC.c);

const Produto = function (nome, preco) {
  this.nome = nome;
  this.preco = preco;
};

Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - this.preco * (percentual / 100);
};

Produto.prototype.aumento = function (percentual) {
  this.preco = this.preco + this.preco * (percentual / 100);
};

const p1 = new Produto("Caneta", 10);
p1.aumento(100);
p1.desconto(100);
console.log(p1);

const Pessoa = function (nome, sobrenome, cpf, idade, sexo) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.cpf = cpf;
  this.idade = idade;
  this.sexo = sexo;
};

Pessoa.prototype.nomeCompleto = function () {
  return this.nome + " " + this.sobrenome;
};
Pessoa.prototype.Idade = function () {
    return `Minha idade é ${this.idade}`;
}
const p2 = new Pessoa("João", "Silva", "123456789", "20", "Masculino");

console.log(p2);
console.log(p2.nomeCompleto());
console.log(p2.Idade());

const p3 = {
    nome: "Caneca",
    preco: 40,
}

Object.setPrototypeOf(p3, Produto.prototype);
p3.aumento(50);
console.log(p3);