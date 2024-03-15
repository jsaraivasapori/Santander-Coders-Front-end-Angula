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

class Biblioteca  {
  
  private _listaLivros : Livro[]

  constructor(){
    
    this._listaLivros = []
  }

  get listaLivros() : Livro[]{
    return this._listaLivros
  }

  adicionar(livro:Livro):boolean{
    if(this._listaLivros.)
    this._listaLivros.push(livro)
    return true
  }
  

}


   



