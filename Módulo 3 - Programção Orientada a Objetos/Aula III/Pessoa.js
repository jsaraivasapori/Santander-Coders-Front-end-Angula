 export class Pessoa{
  Nome;
  Idade;
  Cpf;

  constructor(nome = "",idade = "",cpf = ""){
    if(this.#validarNome(nome) !== false) {
      this.Nome = nome
    }
    if(this.#validarIdade(idade) !== false){
      this.Idade = idade
    } 
    if(this.#validarCpf(cpf) !== false){
      this.Cpf = cpf
      return console.log("Cadastro realizado!");
    }
    return console.log("Refaça a operação, dados inválidos para ciração da Pessoa")

    }
  #validarNome(nome = ""){
    if(nome ==="" || typeof nome !== "string"){
      return false 
  }
    return true
  }
  #validarCpf(cpf = ""){
    if(cpf ==="" || typeof cpf !== "string"){
      return false 
  }
    return true
  }
  #validarIdade(idade = ""){
    if(idade === "" || typeof idade !== "number"){
      return false
    }
    return true
  }
  exibirDados(){
    console.log(this);
  }
 }


const pessoa1 = new Pessoa("João Vitor",24,"kk")
pessoa1.exibirDados()

