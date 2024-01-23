// Filter :

// O que é Filter ?

// Retorna um novo array com os elementos que passaram no teste.

//Exemplo :

const a1 = [1, 50, 10, 3, 5, 85, 65, 0, 7];
const a2 = a1.filter((value) => value >= 10);

console.log(a2);

/***************************************************************/

const a3 = [1, 50, 10, 3, 5, 85, 65, 0, 7];

const a4 = a3.filter((value) => {
  return value >= 10;
});

console.log(a4);

/****************************************************************/

//retorne pessoas que tem o nome com 5 letras ou mais
//retorne pessoas com mais de 50 anos
//retorne pessoas cujo nome termina com a
const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Letícia", idade: 19 },
  { nome: "Rosana", idade: 32 },
];
const pessoasComNomeGrande = pessoas.filter((obj) => obj.nome.length > 5);
const pessoasComMaisDe50Anos = pessoas.filter((obj) => obj.idade > 50);
const pessoasComFinalLetraA = pessoas.filter((obj) => obj.nome.endsWith("a"));

console.log("---------------------------");

pessoasComNomeGrande.forEach((obj) => console.log(obj.nome));
console.log("---------------------------");
pessoasComMaisDe50Anos.forEach((obj) => console.log(obj.nome));
console.log("---------------------------");

pessoasComFinalLetraA.forEach((obj) => console.log(obj.nome));
