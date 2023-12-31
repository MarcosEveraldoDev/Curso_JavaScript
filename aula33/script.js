const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    },  
}

const {nome: n = '' , ...resto} = pessoa;

console.log(n);
console.log(resto);