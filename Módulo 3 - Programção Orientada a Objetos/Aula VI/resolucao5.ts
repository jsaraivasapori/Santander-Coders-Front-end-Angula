const moment = require('moment')
interface Ipessoa{
  nome : string
  cpf : string
  dataNascimento : string
}

class Pessoa {

  private nome : string
  private cpf : string
  private dataNascimento : string

  constructor(pessoa:Ipessoa){

    if(!this.validarNome(pessoa.nome)){
      throw Error("Nome inválido. Verifique e tente novamente")
    }
    this.nome = pessoa.nome

    if(!this.validarCpf(pessoa.cpf)){
      throw Error("Cpf inválido. Informe nesse padrão 000.000.000-00")
    }
    this.cpf = pessoa.cpf

    if(!this.validarDataNascimento(pessoa.dataNascimento)){
      throw Error("Data inválida. Verifique e tente novamente")
    }
    this.dataNascimento = pessoa.dataNascimento
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



