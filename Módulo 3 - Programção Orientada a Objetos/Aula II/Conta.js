/*
-O saldo deve ser inicializado com zero e o atributo contaAtiva como true;
-A classe só poderá ser instanciada se o nome tiver o mínimo de 4 caracteres (não poderá receber números);
-O depositar e o sacar só poderão operar se tiver saldo disponível;
-A ação de inativar uma conta só poderá ser realizada se a conta estiver zerada e, se a mesma tiver ativa;
-Caso a operação (ativar/desativar) tenha sido realizada com exito, deverá retornar um valor booleano indicando isso;
-Faça uso de sua classe em um script;
-Em seu script, crie um array que receba todas as instâncias de conta. Antes de realizar a criação de uma nova conta, verifique se já existe um titular com mesmo nome dentro do mesmo e, so crie a conta caso não exista (dê feedback ao seu usuarios sobre a criação ou nao).
*/


class Conta{
  Titular
  #Saldo = 0
  Ativa = true


  constructor(titular){
    if(typeof titular !== "string"){
      throw Error("O titular é do tipo string")
    }
    else if(titular.length < 4 ){
      throw Error("O titular precisa ter no mínimo 4 caracteres ")
    }
    this.Titular = titular
  }

  sacar(valor){
    return (this.#Saldo - valor > 0) ? this.#Saldo = this.#Saldo - valor : console.log("Saldo insuficiente para saque")
    
  }

  depositar(valor){
    return (this.#Saldo > 0) ? this.#Saldo = this.#Saldo + valor : console.log("Saldo indisponível");

  }

  inativarConta(){
    return (this.#Saldo === 0 && this.Ativa === true) ? this.Ativa = false : console.log("A conta não pode ser inativada, verifique se está ativa e o seu saldo");
  }
}

  