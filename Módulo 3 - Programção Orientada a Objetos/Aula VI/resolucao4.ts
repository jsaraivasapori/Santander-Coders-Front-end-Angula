interface Ilivro{
  titulo:string
  autor:string
  anoPublicacao:number
}

class Livro{
  _titulo : string
  _autor : string
  _anoPublicacao : number

  constructor(livro:Ilivro){
    if(!this.validarString(livro.titulo)){
      throw Error("Título inválido")
    }
    this._titulo = livro.titulo
    if(!this.validarString(livro.autor)){
      throw Error("Autor inválido")    
    }   
    this._autor =livro.autor
    this._anoPublicacao=livro.anoPublicacao
    

    
  }

  private validarString(str : string): boolean{
    const regex = /^[A-Za-z\u00C0-\u017F\s\p{P}]+$/u

    return regex.test(str)
  }
}


   


const livro1 : Ilivro = {titulo: "O Pequeno Príncipe ",autor: "Antoine de Saint-Exupéry",anoPublicacao: 1943}
console.log( new Livro(livro1))

