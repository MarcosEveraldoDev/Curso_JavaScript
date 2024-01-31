/*
// Metodos Uteis Para Obejetos
Object.Values
Object.entries
Object.assign(obj a ser atribuido, obj a ser atribuido)
Object.getOwnpropertyDescriptor(obj, atributos)
...spread

// Ja vi
Object.freeze(congela o objeto)
Object.keys(retorna as chaves do objeto)
Object.defineproperty(define uma propriedade do objeto)
Object.defineproperties(define varias propriedades)

*/

const caneta = { cor: "Azul", ponta: 0.5, marca: "Bic" };
//congela o objeto
Object.freeze(caneta);
// copiar o objeto
const produto = { ...caneta}
// const produto = Object.assign({} , caneta , {preco : 1.90});

for(let prop in produto){
    console.log(prop ,  ": " , produto[prop])
}
console.log('------------------------------------------------');

const produto2 = {nome : "Celular" , marca : "Iphone" , preco : 5000}
console.log(Object.getOwnPropertyDescriptor(produto2 , 'nome'));

console.log('------------------------------------------------');


console.log(Object.keys(produto2));

console.log('------------------------------------------------');

console.log(Object.values(produto2));

console.log('------------------------------------------------');

console.log(Object.entries(produto2));  

