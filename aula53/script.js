function criaNome(nome , sobrenome , peso , altura , assunto){
 return {
    nome,
    sobrenome,
    peso,
    get imc(){
      const calc = this.peso / (this.altura ** 2);
      return calc.toFixed(2);
    },
    falaNome() {
        return `${nome} ${sobrenome} esta falando sobre ${assunto}, ele tem ${peso} KG de peso e ${altura} M de altura.`
    },
    altura,
    assunto,
 }
}

const p1 = criaNome('Joao' , 'Silva' , 80 , 1.80 , 'JS')
console.log(p1.falaNome());
console.log(`seu imc é ${p1.imc}`); 

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

console.log(mercury);
console.log(venus);
console.log(earth);