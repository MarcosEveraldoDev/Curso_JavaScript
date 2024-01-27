// O que é Object.define.property()?

//define uma nova propriedade diretamente em um objeto, ou modifica uma propriedade já existente em um objeto, e retorna o objeto.

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, "estoque", {
    enumerable: true, // mostra a chave
    value: estoque, // valor
    writable: true, // pode alterar
    configurable: false, // configurável
  });

  // Object.define.properties()

  // define várias propriedades em um objeto, e retorna o objeto, apenas em um objeto.

  Object.defineProperties(this, {
    nome: {
      enumerable: true, // mostra a chave
      value: nome, // valor
      writable: true, // pode alterar
      configurable: false, // configurável
    },
    preco: {
      enumerable: true, // mostra a chave
      value: nome, // valor
      writable: true, // pode alterar
      configurable: false, // configurável
    },
  });
}

const p1 = new Produto("Camiseta", 20, 3);

p1.estoque = 60;

for (let chave in p1) {
  console.log(chave + ": " + p1[chave]);
}
