//factory function => objetos
//constructor function => objetos
// construtor = Pessoa (new)

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p1 = new Pessoa('Lu' , 'Silva');


console.log(p1.nome , p1.sobrenome);

