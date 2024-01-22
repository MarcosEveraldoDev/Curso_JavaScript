// revisão de Arrays :

// declaração de array

let array = ["string", 1, true];

// forEach
// executa uma função para cada item do array
array.forEach(function (item, index) {
  console.log(item, index);
});

// push
//acrescenta um item no final da lista
array.push("novo item");

// pop
// remove o ultimo item
array.pop();

// shift
// remove o primeiro item
array.shift();

// unshift
// acrescenta um item no inicio da lista
array.unshift("novo item");

// splice
// altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.
array.splice(0, 3);

//slice
// retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim (fim não é incluído) de um array original. O Array original não é modificado.
let novoArray = array.slice(0, 3);

//split
// divide uma string em um array de strings, usando um delimitador como um divisor.
let string = "uma frase";

let arrayString = string.split(" ");

//join
// junta todos os elementos de um array em uma string.

let arrayJoin = ["a", "b", "c"];

let stringJoin = arrayJoin.join("-");

console.log(stringJoin);

console.log(array);

/*********************************/
let array2 = [1, 2, 3, 4, 5];

array2.splice();

console.log(array2);

let array3 = [1, 2, 3, 4, 5];

array3.splice(5, 0, 6, 7, 8, 9, 10);
array3.forEach(function (item) {
  console.log(item);
});
