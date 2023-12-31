const data = new Date();
data.setFullYear(2019, 9, 7);
data.setHours(22, 52, 0, 0);

// Opções para a formatação
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false };

// Criar uma string formatada usando toLocaleString
const dataFormatada = data.toLocaleString('pt-BR', options);

// Selecionar o elemento container e definir o conteúdo HTML
const container = document.querySelector('.container');
container.innerHTML = dataFormatada;

