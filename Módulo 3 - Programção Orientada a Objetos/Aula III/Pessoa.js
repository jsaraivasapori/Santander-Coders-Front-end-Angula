 export class Pessoa{
  #Nome;
  #Idade;
  #Cpf;

  constructor(nome = "",idade = "",cpf = ""){
    if(this.#validarNome(nome) !== false) {
      this.#Nome = nome
    }
    if(this.#validarIdade(idade) !== false){
      this.#Idade = idade
    } 
    if(this.#validarCpf(cpf) !== false){
      this.#Cpf = cpf
      return console.log("Cadastro realizado!");
    }
    return console.log("Refaça a operação, dados inválidos para ciração da Pessoa")

    }

  get nome(){
    return this.#Nome
  }
  
  get idade(){
    return this.#Idade
  }

  set idade(novaIdade){
    if(novaIdade > this.#Idade && typeof novaIdade ==="number"){
      return this.#Idade = novaIdade
    }
    return console.log("Entrada de dados errada. Operação abortada, revise os dados e tnte novamente.")
  }

  get cpf(){
    return this.#Cpf
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
    const dados = {Nome: this.nome,Idade: this.idade, Cpf: this.cpf }
    return dados
 }
 }

const pessoa1 = new Pessoa("João Vitor",24,"kk")
console.log(pessoa1.exibirDados())

