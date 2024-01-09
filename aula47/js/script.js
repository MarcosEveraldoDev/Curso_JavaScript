let temporizador = document.getElementById(temporizador);

function temporizador(){
    let hora = new Date().getHours();
    let minuto = new Date().getMinutes();
    let segundo = new Date().getSeconds();

    temporizador.innerHTML = `${hora}:${minuto}:${segundo}`;
}

setInterval(temporizador, 1000);