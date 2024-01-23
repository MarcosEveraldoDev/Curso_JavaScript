// concatenação de arrays

const a1 = [1, 2, 3, 4, 5];
const a2 = [6, 7, 8, 9, 10];
const a3 = a1.concat(a2);
console.log(a3);

// outra forma de concatenar arrays

const a4 = [...a1, ...a2];
console.log(a4);