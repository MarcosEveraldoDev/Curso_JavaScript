// construtora -> molde (classe)
function Pessoa(nome , sobrenome) { 
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}
// método -> função dentro de uma classe
// prototype -> objeto que aponta para a função construtora de uma classe
Pessoa.prototype.nomeCompleto = function()  {
    return this.nome + ' ' + this.sobrenome;
}

// instância -> objeto
const p1 = new Pessoa('Luiz', 'Otávio'); // <- Pessoa == função construtora
const p2 = new Pessoa('Maria', 'Oliveira');// <- Pessoa == função construtora

console.dir(p1.nomeCompleto());
console.dir(p2.nomeCompleto());