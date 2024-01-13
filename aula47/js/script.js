const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const reiniciar = document.querySelector(".reiniciar");
const tempo = document.querySelector("#tempo");

let horas = 0;
let minutos = 0;
let segundos = 0;
let intervalo;
let pausado = false;

iniciar.addEventListener("click", function (event) {
  event.preventDefault();
  if (!pausado) {
    intervalo = setInterval(function () {
      segundos++;
      if (segundos === 60) {
        minutos++;
        segundos = 0;
      }
      if (minutos === 60) {
        horas++;
        minutos = 0;
      }
      const horasFormatadas = horas.toString().padStart(2, "0");
      const minutosFormatados = minutos.toString().padStart(2, "0");
      const segundosFormatados = segundos.toString().padStart(2, "0");

      tempo.innerHTML = `${horasFormatadas}:${minutosFormatados}:${segundosFormatados}`;
    }, 100);
    tempo.classList.remove("tempo-pausado");
  }
  pausado = false;
});

pausar.addEventListener("click", function (event) {
  event.preventDefault();
  clearInterval(intervalo);
  pausado = true;
  tempo.classList.add("tempo-pausado");
});

reiniciar.addEventListener("click", function (event) {
  event.preventDefault();
  clearInterval(intervalo);
  pausado = false;
  horas = 0;
  minutos = 0;
  segundos = 0;
  tempo.innerHTML = "00:00:00";
  tempo.classList.remove("tempo-pausado");
});
