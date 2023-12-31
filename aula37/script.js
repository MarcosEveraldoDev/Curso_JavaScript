const largura = Number(prompt("Digite a largura da imagem: "));
const altura = Number(prompt("Digite a altura da imagem: "));

const container = document.querySelector(".container");

function ePaisagem() {
    if(largura > altura){
        container.innerHTML = "Essa imagem essta no modo paisagem"
    } else if(altura > largura){
        container.innerHTML = "Essa imagem essta no modo retrato"
    }
    else{
        container.innerHTML = "Essa imagem esta no modo quadrado"

    }
}

ePaisagem();