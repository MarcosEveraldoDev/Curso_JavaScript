function Calculo(numero) {
  if (numero % 3 === 0 && numero % 5 === 0) return "FizzBuzz";

  if (numero % 5 === 0) return "Buzz";9

  if (numero % 3 === 0) return "Fizz";

  if (numero % 3 !== 0 && numero % 5 !== 0) return numero;
}

for (let i = 0; i < 100; i++) {
  console.log(i, Calculo(i));
}
