const nome = 'Marcos';
const sobrenome = 'Everaldo';
const idade = 20;
const peso = 70;
const altura = 1.52;

let imc = peso/(altura * altura);
let imcArredondado = imc.toFixed(2);
let anoNascimento = 2023 - idade;

console.log('Meu nome é ', nome , ' ' , sobrenome , 'tenho ' , idade , 'anos');
console.log('Meu peso é ', peso , 'kg e minha altura é ', altura , 'm');
console.log('Meu IMC é ', imcArredondado);
console.log('Eu nasci no ano de ', anoNascimento);
