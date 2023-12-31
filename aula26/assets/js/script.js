function calcularImc(){

let peso = document.getElementById('peso').value;
let altura = document.getElementById('altura').value;

let imc = peso / (altura * altura); 

if(isNaN(peso) || isNaN(altura) || altura == 0 || peso == 0){
alert('Digite uma altura e um peso correto');
return;
}

let classifacao = '';

    if(imc < 17){
        classifacao = 'Muito Abaixo do Peso';
    }
    else if(imc == 17 && imc<=18.49){
        classifacao = 'Abaixo do Peso';
    }
    else if(imc >=18.5 && imc <=24.99){
        classifacao = 'Peso Normal';
    }
    else if(imc >= 25 && imc <= 29.99){
        classifacao = 'Acima do Peso';
    }
    else if(imc >=30 && imc <= 34.99){
        classifacao = 'Obesidade I';
    }
    else if(imc >=35 && imc<= 39.99){
        classifacao = 'Obesidade II (Severa)';
    }
    else{
        classifacao = 'Obesidade III(Morbida)';
    }


    let resposta = document.querySelector('.resposta');
    resposta.innerHTML = `<p>Seu IMC é : ${imc.toFixed(2)}</p>` + 
    ` <p>Sua Classificação é : ${classifacao}`
}