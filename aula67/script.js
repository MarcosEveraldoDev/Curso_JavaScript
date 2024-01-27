// O que é Object.define.property()?

//define uma nova propriedade diretamente em um objeto, ou modifica uma propriedade já existente em um objeto, e retorna o objeto.

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, "estoque", {
    enumerable: true, // mostra a chave
    //   value: estoque, // valor
    //   writable: true, // pode alterar
    configurable: false, // configurável
    get: function () {
      return estoque;
    },
    set: function (valor) {
      if (typeof valor !== "number") {
        throw new TypeError(`Estoque precisa ser um número`);
      }
      estoque = valor;
    },
  });
}

const p1 = new Produto("Camiseta", 20, 3);

p1.estoque = 5;

for (let chave in p1) {
  console.log(chave + ": " + p1[chave]);
}

//Factory function : get e set

function criaProduto(nome) {
  return {
    get nome() {
      return nome;
    },
    set nome(valor) {
      if (typeof valor !== "string") {
        throw new TypeError("Nome precisa ser uma string");
      }
      if (valor.length < 3) {
        throw new TypeError("Nome precisa ter mais de 3 caracteres");
      }
      nome = valor;
    },
  };
}

const p2 = criaProduto("Camiseta");
console.log(p2.nome);
p2.nome = 'a';
console.log(p2.nome);