//IIFE

(function(){
    console.log('123456');
})();

(function(idade, peso, altura){
    const sobrenome = 'Everaldo';
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }

    function falaNome(){
        console.log(criaNome('Marcos'));
    }

    falaNome();
    console.log(idade, peso, altura);
})(20, 60, 1.53);