//Polimorfismo em JS

//Classe Pai
function Conta(agencia ,conta , saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

//Metodos da Classe pai
Conta.prototype.sacar = function(valor){
    if(this.saldo < valor){
        console.log(`Saldo Insuficiente: ${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
}
Conta.prototype.depositar = function(valor){
    this.saldo += valor;
}
Conta.prototype.verSaldo = function(){
    console.log(`Ag: ${this.agencia} / Ct: ${this.conta} / Saldo: ${this.saldo}`);
}

//Classe filhas
function ContaCorrente(agencia ,conta , saldo , limite){
    Conta.call(this,agencia ,conta , saldo);
    this.limite = limite;
}
function ContaPoupanca(agencia ,conta , saldo){
    Conta.call(this,agencia ,conta , saldo);
}

// Herança da classe pai para a classe filha
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype = Object.create(Conta.prototype);

//Definindo o construtor da classe filha
ContaCorrente.prototype.constructor = ContaCorrente;
ContaPoupanca.prototype.constructor = ContaPoupanca;

//Polimorfismo de sobrescrita do metodo sacar 
ContaCorrente.prototype.sacar = function(valor){
    if(valor > (this.saldo + this.limite)){
        console.log(`Saldo Insuficiente: ${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
}

//Instanciando objetos da classe filha
const cc = new ContaCorrente(11,22,0,100);
cc.depositar(10);
cc.sacar(110);

const cp = new ContaPoupanca(11,22,0,100);
cp.depositar(10);
cp.sacar(110);
cp.verSaldo();