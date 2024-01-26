// revisando Objetos

let pessoa = new Object();

pessoa.nome = "Marcos";
pessoa.sobrenome = "Everaldo";
pessoa.idade = 20;

console.log(`Meu nome é ${pessoa.nome} ${pessoa.sobrenome}`);

pessoa.falarNome = function () {
  return console.log(`Meu nome é ${this.nome} ${this.sobrenome}`);
};

pessoa.falarNome();

pessoa.dataNascimento = function () {
  const dataAtual = new Date();
  return console.log(`Nasci em ${dataAtual.getFullYear() - this.idade}`);
};

pessoa.dataNascimento();

for (let chave in pessoa) {
  console.log(pessoa[chave]);
}
