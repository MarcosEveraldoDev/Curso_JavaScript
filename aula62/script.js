//Reduce 

//O que é Reduce :

//Reduce é um método que retorna um valor a partir de um array.

//Exemplo:

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const soma = array.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
});

console.log(soma);

console.log(array.reduce((acumulador, valorAtual) => acumulador + valorAtual));