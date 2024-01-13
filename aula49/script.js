function oi(a, b = 2, c =10) {
  console.log(a+b+c);
}
oi(2,undefined,15);

function conta(operador , acumulador , ...numeros){
  for(let numero of numeros){
  console.log(numero)
  acumulador += numero;
  console.log(`Acumulador : ${acumulador}`)
  }
  
}
conta("+",0,10,20,30);

const ola = () => {
  console.log("oi")
}
ola();
