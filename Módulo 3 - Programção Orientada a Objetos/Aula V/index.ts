 class Pessoa {
  _nome: string
  _idade: number
  _cpf: string
  

  constructor(nome : string = "", idade : number = 0 , cpf : string = "" ){
    const caracteresInvalidos = ["0","1","2","3","4","5","6","7","8","9",]
   
    if(nome ===""){
     throw Error("O nome não pode ser vazio");
    
    }
    if (nome.length < 4){
      throw Error("O titular precisa ter no mínimo 4 caracteres ")
    }
    if(caracteresInvalidos.some(caractere => nome.includes(caractere))){
      throw Error ("O nome do titular não é do tipo alfanumérico")
    }
    this._nome = nome
    if( idade < 18){
      throw Error("A idade não pode ser menor que 18");     
    }
    this._idade = idade
    if (cpf === ""){
      throw Error("O CPF não pode ser nulo");
      
    }
    this._cpf= cpf
    console.log("Instância criada com sucesso");
    
  }

  exibirDados() : string{
    return `Nome: ${this._nome}, Idade: ${this._idade}, CPF: ${this._cpf}`
  }
}


class Conta{
  _titular:Pessoa
  _saldo:number
  _ativa:boolean

  constructor(titular:Pessoa){

    
    this._titular = titular
    this._saldo = 0
    this._ativa = true
    console.log("Conta criada com sucesso!");
  }

  get titular():Pessoa{
    return this._titular
  }

  get saldo():number{
    return this._saldo
  }

  get ativa(): boolean{
    return this._ativa
  }
  sacar(valor: number): number | undefined{
    if(this._saldo - valor >= 0){
      console.log(`Saque no valor de R$ ${valor} realizado com sucesso!`);
      return this._saldo -= valor
    } 
     console.log("Saldo insuficiente para saque")
     
  }

  depositar(valor: number) : number|undefined{
    if(this.ativa === true){
      if (valor> 0){
        console.log(`Deposito de R$ ${valor} realizado com sucesso`);
        return this._saldo += valor
      }
      console.error("Verifique o valor, precisa ser positivo.")
    }
    console.error("A conta está inativa, nenhuma movimentação é permitida")
     
  }

  inativarConta() : boolean | undefined{
    if(this._saldo === 0 && this._ativa === true) { 
      console.error("Operação realizada com sucesso. Conta inativada")
      return this._ativa= false 
    }
    console.error("A conta não pode ser inativada, verifique se está ativa e o seu saldo")
  } 

  transferir(valor : number, contaDestino:Conta) : number|undefined{
    if(this.ativa === true && this._saldo >= valor && valor <= this._saldo ){
      console.log(`Deposito realizado `)
      this._saldo -= valor
      return contaDestino.depositar(valor)
    }
    console.error("Transfência ão realizada");
  }
}



const pessoa1 = new Pessoa("Joao",24, "00000")
const contaJoao = new Conta(pessoa1)

const pessoa2 = new Pessoa("Rosangenla", 50, "00000")
const contaRosangela = new Conta(pessoa2)



contaJoao.depositar(200)
contaJoao.transferir(20, contaRosangela)
console.log(`Saldo João : ${contaJoao.saldo}`);

console.log(`Saldo Rosangela: ${contaRosangela.saldo}`);

