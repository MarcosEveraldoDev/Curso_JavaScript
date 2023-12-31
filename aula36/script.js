const num1 = Number(prompt("Digite um numero"));
const num2 = Number(prompt("Digite outro numero"));

const container = document.querySelector(".container");

function maiorNumero() {
  if (num1 > num2) {
    container.innerHTML = `O maior numero é ${num1}`;
  } else if (num2 > num1) {
    container.innerHTML = `O maior numero é ${num2}`;
  } else {
    container.innerHTML = "Os numeros são iguais";
  }
}

maiorNumero();
