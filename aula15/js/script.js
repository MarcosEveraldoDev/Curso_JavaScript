let numero = prompt("Digite um numero");
let numeroTitle = document.getElementById('title');
n1 = Number(numero);
numeroTitle.innerHTML = n1;

let raiz = Math.sqrt(n1);
let inteiro = Number.isInteger(n1);
let naN = Number.isNaN(n1);
let arredondarPraCima = Math.ceil(n1);
let arredondarPraBaixo = Math.floor(n1);
let casaDecimais = n1.toFixed(2);

document.body.innerHTML += `Raiz quadrada : ${raiz} <br/>`;
document.body.innerHTML += `É inteiro ? ${inteiro} <br/>`;
document.body.innerHTML += `É NaN ? ${naN} <br/>`;
document.body.innerHTML += `Arredondado pra cima : ${arredondarPraCima} <br/>`;
document.body.innerHTML += `Arredondado pra baixo : ${arredondarPraBaixo} <br/>`;
document.body.innerHTML += `Casa decimais : ${casaDecimais} <br/>`;
