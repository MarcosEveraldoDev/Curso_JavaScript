//Map

//O que é Map :

//Map é um objeto que armazena chaves e valores.

//Map é uma estrutura de dados que permite armazenar valores associados a chaves.

//Exemplo : 

const map = new Map();

map.set('name', 'John')
map.set('age', 30)

console.log(map)
console.log(map.get('name'))
console.log(map.get('age'))
console.log(map.size)

// retorne apenas uma string com o nome da pessoa
// remova apenas a chave "nome"
// adicione uma chave id em cada objeto

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
]

const names = people.map((obj) => obj.name);


people.forEach((obj, index) => {
    obj.id = index + 1;
    
}
)

console.log(people)

