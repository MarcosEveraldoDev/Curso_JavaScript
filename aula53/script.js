// function criaNome(nome , sobrenome , peso , altura , assunto){
//  return {
//     nome,
//     sobrenome,
//     peso,

//     falaNome() {
//         return `${nome} ${sobrenome} esta falando sobre ${assunto},
//         ele tem ${peso} de peso e ${altura} de altura.`
//     },
//     altura,
//     assunto,
//  }
// }

// const p1 = criaNome('Joao' , 'Silva' , 80 , 1.80 , 'JS')
// console.log(p1.falaNome());

const mercury = createPlanets("Mercury");
const venus = createPlanets("Venus");
const earth = createPlanets("Earth");

function createPlanets(name) {
  if (name === "Mercury") {
    return new Mercury();
  } else if (name === "Venus") {
    return new Venus();
  } else name === "Earth";
  return new Earth();
}

function Mercury() {
  this.name = "Mercury";
  this.distance = "0.4";
  this.speed = "0.4";
}

function Venus() {
  this.name = "Venus";
  this.distance = "0.7";
  this.speed = "0.7";
}

function Earth() {
  this.name = "Earth";
  this.distance = "1";
  this.speed = "1";
}

console.table(mercury);
console.table(venus);
console.table(earth);