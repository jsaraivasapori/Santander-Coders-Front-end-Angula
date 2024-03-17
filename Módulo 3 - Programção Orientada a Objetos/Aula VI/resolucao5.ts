const moment = require('moment')

interface IPessoa{
  nome : string
  cpf : string
  dataNascimento : string
}

class Pessoa {

  private _nome : string
  private _cpf : string
  private _dataNascimento : string

  constructor(pessoa:IPessoa){

    if(!this.validarNome(pessoa.nome)){
      throw Error("Nome inválido. Verifique e tente novamente")
    }
    this._nome = pessoa.nome

    if(!this.validarCpf(pessoa.cpf)){
      throw Error("Cpf inválido. Informe nesse padrão 000.000.000-00")
    }

    this._cpf = pessoa.cpf

    if(!this.validarDataNascimento(pessoa.dataNascimento)){
      throw Error("Data inválida. Verifique e tente novamente")
    }
    this._dataNascimento = pessoa.dataNascimento
  }

  private validarNome(nome:string) : boolean{
    const regexNome = /^[A-Za-z\u00C0-\u017F\s]+$/

    if(!regexNome.test(nome)){
      return false
    }
    return true
  }

  private validarCpf(cpf:string) : boolean{
    const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/

    if(!regexCPF.test(cpf)){
      return false
    }
    return true

  }

  private validarDataNascimento(dataNascimento:string) : boolean{
    
    return moment(dataNascimento, 'DD/MM/YYYY', true).isValid();
    
  }

}

class Aluno extends Pessoa{

  static matricula : number = 100
  private numeroMatricula : number
  private matriculaAtiva : boolean

  constructor(aluno:IPessoa){
    super(aluno)
    Aluno.matricula ++
    this.numeroMatricula = Aluno.matricula
    this.matriculaAtiva = false
    
  }
   alterarestadoMatricula(): void{
    this.matriculaAtiva = !this.matriculaAtiva
  }
  situacao(pessoa:IPessoa):string{
    return`
       Aluno: ${pessoa.nome}  
       CPF: ${pessoa.cpf}
       Data de nascimento: ${pessoa.dataNascimento}
       Matrícula: ${this.numeroMatricula}
       Matrícula Ativa: ${this.matriculaAtiva}
       `
      
    
  }
}
      

const pessoa1 : IPessoa= {nome: "João Vitor", cpf:"111.123.456-78", dataNascimento:"28/02/1999"}

const aluno = new Aluno(pessoa1)

aluno.alterarestadoMatricula()
console.log(aluno.situacao(pessoa1))