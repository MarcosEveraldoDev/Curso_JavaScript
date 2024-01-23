//Atividade sobre reduce , map e filter
// Some todos os numeros (Reduce)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const soma = numeros.reduce((acumulador, valor) => {
  return acumulador + valor;
});

console.log(soma);

console.log(numeros.reduce((acumulador, valor) => acumulador + valor));

//retorne um array com os pares (Filter)

const pares = numeros.filter((valor) => valor % 2 == 0);

console.log(pares);

//retorne um array com o dobro dos valores (Map)

const dobro = numeros.map((valor) => valor * 2);

console.log(dobro);

// retorne a pessoa mais velha

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const maisVelha = pessoas.reduce((acumulador, valor) => {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(maisVelha)